import React from 'react';
import InternalLink from './InternalLink';

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-center py-6">
      <p className="text-sm text-gray-700 dark:text-gray-300">
        © {new Date().getFullYear()} SEOScribe. All rights reserved.
      </p>
      <div className="mt-2 space-x-4">
        <InternalLink to="/terms">Terms of Service</InternalLink>
        <InternalLink to="/privacy">Privacy Policy</InternalLink>
      </div>
    </footer>
  );
}
