import React, { useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useNavigate, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import AuthForm from '../components/AuthForm';

export default function AuthPage() {
  const [session, setSession] = React.useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  if (session) {
    // If already logged in, go to dashboard
    return <Navigate to="/dashboard" />;
  }

  const handleGoogle = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/dashboard` },
    });
  };

  return (
    <>
      <Helmet>
        <title>Login / Sign Up – SEOScribe</title>
        <meta name="description" content="Login or sign up to access SEOScribe tools." />
        <link rel="canonical" href="https://seoscribe.com/auth" />
      </Helmet>
      <div className="max-w-md mx-auto py-16 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">Log in or Sign up</h2>
        <button
          onClick={handleGoogle}
          className="w-full mb-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Continue with Google
        </button>
        <div className="flex items-center my-4">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-gray-500">or</span>
          <hr className="flex-grow border-gray-300" />
        </div>
        <AuthForm />
      </div>
    </>
  );
}
