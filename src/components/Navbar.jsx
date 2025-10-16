import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
import InternalLink from './InternalLink';

export default function Navbar() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Check auth state on mount
  useEffect(() => {
    const session = supabase.auth.session();
    setUser(session?.user ?? null);
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    navigate('/');
  };

  // Theme toggle state (reads localStorage)
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    const saved = localStorage.getItem('theme');
    const isDark = saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setDarkMode(isDark);
    document.documentElement.classList.toggle('dark', isDark);
  }, []);
  const toggleTheme = () => {
    const newTheme = darkMode ? 'light' : 'dark';
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark', !darkMode);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow px-4 py-3 flex justify-between items-center">
      <div className="flex items-center space-x-4">
        <InternalLink to="/" className="text-xl font-bold">SEOScribe</InternalLink>
        <InternalLink to="/blog">Blog</InternalLink>
        <InternalLink to="/terms">Terms</InternalLink>
        <InternalLink to="/privacy">Privacy</InternalLink>
      </div>
      <div className="flex items-center space-x-4">
        {user ? (
          <>
            <button
              onClick={() => navigate('/dashboard')}
              className="px-3 py-1 bg-brandBlue text-white rounded"
            >
              Dashboard
            </button>
            <button onClick={handleLogout} className="px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded">
              Logout
            </button>
          </>
        ) : (
          <InternalLink to="/auth" className="px-3 py-1 bg-brandBlue text-white rounded">
            Login / Signup
          </InternalLink>
        )}
        <button onClick={toggleTheme} className="p-2">
          {darkMode ? '🌙' : '☀️'}
        </button>
      </div>
    </nav>
  );
}
