import React from 'react';

const reviews = [
  {
    name: 'Alice Johnson',
    text: 'SEOScribe has revolutionized my content strategy. My site traffic doubled!',
    avatar: '/avatar1.jpg',
  },
  {
    name: 'Carlos M.',
    text: 'The AI writer is amazingly accurate. Saves me hours every week.',
    avatar: '/avatar2.jpg',
  },
  {
    name: 'Nina Patel',
    text: 'Fantastic tool for SEO content. Easy to use and very effective.',
    avatar: '/avatar3.jpg',
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <h2 className="text-3xl text-center font-bold mb-8">What Our Customers Say</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {reviews.map((rev) => (
          <div key={rev.name} className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg shadow">
            <img src={rev.avatar} alt={`${rev.name} avatar`} className="h-16 w-16 rounded-full mx-auto mb-4" />
            <p className="italic mb-4">“{rev.text}”</p>
            <p className="font-semibold text-center">- {rev.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
