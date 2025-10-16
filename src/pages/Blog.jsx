import React from 'react';
import { Helmet } from 'react-helmet';

const dummyPosts = [
  { id: 1, title: 'Boost Your SEO with AI Writing', excerpt: 'Learn how AI tools can help improve your website ranking...' },
  { id: 2, title: 'Top 5 SEO Tips for 2025', excerpt: 'Stay ahead in SEO with these up-to-date strategies...' },
  { id: 3, title: 'How SEOScribe Works Under the Hood', excerpt: 'A deep dive into the technology behind SEOScribe...' },
];

export default function Blog() {
  return (
    <>
      <Helmet>
        <title>Blog – SEOScribe</title>
        <meta name="description" content="Read the latest articles on SEO and AI writing." />
        <link rel="canonical" href="https://seoscribe.com/blog" />
      </Helmet>
      <div className="max-w-4xl mx-auto py-10 px-4">
        <h1 className="text-3xl font-bold mb-6">Blog</h1>
        <div className="space-y-6">
          {dummyPosts.map((post) => (
            <div key={post.id} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
              <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 dark:text-gray-300">{post.excerpt}</p>
              {/* Placeholder link */}
              <a href="#" className="text-blue-600 dark:text-blue-400 hover:underline mt-2 block">
                Read more
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
