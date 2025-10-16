import React, { useState } from 'react';

const faqs = [
  { q: 'What is SEOScribe?', a: 'SEOScribe is an AI-powered writing assistant that helps you create SEO-optimized content quickly.' },
  { q: 'How do I get started?', a: 'Simply sign up (for free) and try our tools on the dashboard. No credit card required!' },
  { q: 'Can I upgrade for more features?', a: 'Yes. We offer a premium plan with unlimited usage. Click “Upgrade” on the dashboard to subscribe.' },
];

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-3xl text-center font-bold mb-8">FAQs</h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, idx) => (
          <div key={faq.q} className="border-b border-gray-300 dark:border-gray-700 pb-4">
            <button
              className="w-full text-left flex justify-between items-center py-2"
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            >
              <span className="font-medium">{faq.q}</span>
              <span>{openIndex === idx ? '−' : '+'}</span>
            </button>
            {openIndex === idx && (
              <p className="mt-2 text-gray-600 dark:text-gray-300">{faq.a}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
