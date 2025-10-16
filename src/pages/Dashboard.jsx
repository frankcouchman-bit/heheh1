import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import UsageTracker from '../components/UsageTracker';
import ToolCard from '../components/ToolCard';
import ToolModal from '../components/ToolModal';
import CTABlock from '../components/CTABlock';

const tools = [
  { id: 'rewriter', name: 'Content Rewriter', description: 'Rewrite articles and text for uniqueness.', icon: '/icon-rewrite.png', priceTier: 'free' },
  { id: 'longform', name: 'Long-Form Writer', description: 'Generate full blog posts or reports.', icon: '/icon-longform.png', priceTier: 'premium' },
  { id: 'keyword', name: 'Keyword Research', description: 'Get SEO keywords for your topic.', icon: '/icon-keyword.png', priceTier: 'free' },
];

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [plan, setPlan] = useState('free'); // This could come from user metadata
  const [usage, setUsage] = useState({});
  const [openTool, setOpenTool] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setUser(session?.user ?? null);
      // Optionally fetch user profile/plan here
    });
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => listener.subscription.unsubscribe();
  }, []);

  // Fetch usage data from backend (placeholder)
  useEffect(() => {
    async function loadUsage() {
      try {
        // Example API endpoint to get usage
        const res = await fetch('/api/usage');
        const data = await res.json();
        setUsage(data);
      } catch (err) {
        setUsage({ rewriter: { used: 5, limit: 20 }, longform: { used: 2, limit: 5 }, keyword: { used: 10, limit: 50 } });
      }
    }
    loadUsage();
  }, []);

  if (!user) {
    // Must be logged in
    return <Navigate to="/auth" />;
  }

  return (
    <>
      <Helmet>
        <title>Dashboard – SEOScribe</title>
        <meta name="description" content="Your SEOScribe Dashboard" />
        <link rel="canonical" href="https://seoscribe.com/dashboard" />
      </Helmet>
      <div className="max-w-5xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6">Welcome, {user.email}</h1>

        <UsageTracker data={usage} />

        <h2 className="mt-10 text-2xl font-bold mb-4">Tools</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <ToolCard
              key={tool.id}
              tool={tool}
              onOpen={setOpenTool}
              isPremium={plan === 'premium'}
            />
          ))}
        </div>

        <CTABlock />
      </div>

      {openTool && (
        <ToolModal tool={openTool} onClose={() => setOpenTool(null)} />
      )}
    </>
  );
}
