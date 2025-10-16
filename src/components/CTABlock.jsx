import React from 'react';
import InternalLink from './InternalLink';

export default function CTABlock() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-400 to-blue-500 text-white">
      <h2 className="text-3xl text-center font-bold mb-4">Ready to Elevate Your Content?</h2>
      <p className="text-center mb-6">Join thousands of marketers using SEOScribe to save time and boost rankings.</p>
      <div className="text-center">
        <InternalLink to="/auth">
          <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 transition">
            Start Now
          </button>
        </InternalLink>
      </div>
    </section>
  );
}
