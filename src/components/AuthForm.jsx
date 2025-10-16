import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: `${window.location.origin}/dashboard` },
    });
    if (error) {
      setMessage('Failed to send magic link.');
    } else {
      setMessage('Magic link sent! Check your email.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        placeholder="Your email address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600"
      />
      <button type="submit" className="w-full px-4 py-2 bg-brandBlue text-white rounded">
        Send Magic Link
      </button>
      {message && <p className="text-sm text-green-600">{message}</p>}
    </form>
  );
}
