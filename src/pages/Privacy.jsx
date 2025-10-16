import React from 'react';
import { Helmet } from 'react-helmet';

export default function Privacy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy – SEOScribe</title>
        <meta name="description" content="Privacy Policy for SEOScribe." />
        <link rel="canonical" href="https://seoscribe.com/privacy" />
      </Helmet>
      <div className="max-w-3xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        <p className="mb-4">Last updated: October 2025</p>
        <p className="mb-2">Your privacy is important to us. This Privacy Policy explains how we handle your data... (placeholder)</p>
        <p className="mb-2">1. Information We Collect: ...</p>
        <p className="mb-2">2. How We Use Data: ...</p>
        {/* Add actual policy content */}
      </div>
    </>
  );
}
