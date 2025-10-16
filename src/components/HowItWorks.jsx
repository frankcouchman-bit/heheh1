import React from 'react';

const steps = [
  { title: 'Choose a Tool', desc: 'Select the AI writing tool for your need.' },
  { title: 'Enter Details', desc: 'Provide a topic or keywords.' },
  { title: 'Generate Content', desc: 'Get polished SEO content instantly.' },
];

export default function HowItWorks() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <h2 className="text-3xl text-center font-bold mb-8">How It Works</h2>
      <div className="max-w-3xl mx-auto space-y-8">
        {steps.map((step, idx) => (
          <div key={step.title} className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="h-10 w-10 flex items-center justify-center rounded-full bg-brandBlue text-white font-bold">
                {idx + 1}
              </div>
            </div>
            <div>
              <h3 className="font-semibold text-xl">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-300">{step.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
