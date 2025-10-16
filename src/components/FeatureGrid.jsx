import React from 'react';

const features = [
  { title: 'Instant Articles', description: 'Write blog posts in one click.' },
  { title: 'Keyword Optimization', description: 'Get high-ranking keywords suggestions.' },
  { title: 'Plagiarism Checker', description: 'Ensure your content is 100% unique.' },
];

export default function FeatureGrid() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <h2 className="text-3xl text-center font-bold mb-8">Features</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {features.map((feat) => (
          <div key={feat.title} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">{feat.title}</h3>
            <p>{feat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
