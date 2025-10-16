import React from 'react';
import { Helmet } from 'react-helmet';

export default function Terms() {
  return (
    <>
      <Helmet>
        <title>Terms of Service – SEOScribe</title>
        <meta name="description" content="Terms of Service for SEOScribe." />
        <link rel="canonical" href="https://seoscribe.com/terms" />
      </Helmet>
      <div className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        <p className="mb-4">Last updated: October 2025</p>
        <p className="mb-2">By using SEOScribe, you agree to the following terms... (placeholder content)</p>
        <p className="mb-2">1. Use of Service: ...</p>
        <p className="mb-2">2. Account Security: ...</p>
        {/* Add actual terms content */}
      </div>
    </>
  );
}
