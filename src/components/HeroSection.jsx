import React from 'react';
import InternalLink from './InternalLink';

export default function HeroSection() {
  return (
    <section className="text-center py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <h1 className="text-4xl font-bold mb-4">AI-Powered SEO Content Writer</h1>
      <p className="mb-6">Generate high-quality, SEO-optimized content in seconds. Try SEOScribe for free!</p>
      <InternalLink to="/auth">
        <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition">
          Get Started
        </button>
      </InternalLink>
      <div className="mt-10">
        <img src="/hero.jpg" alt="AI writing SEO content" className="mx-auto w-3/4 max-w-xl rounded" />
      </div>
    </section>
  );
}
