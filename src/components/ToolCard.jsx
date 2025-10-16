import React from 'react';

export default function ToolCard({ tool, onOpen, isPremium }) {
  const locked = tool.priceTier === 'premium' && !isPremium;
  return (
    <div className="relative bg-white dark:bg-gray-800 p-6 rounded-lg shadow hover:shadow-lg transition">
      {locked && (
        <div className="absolute inset-0 bg-gray-200 dark:bg-gray-700 bg-opacity-75 flex items-center justify-center rounded-lg">
          <p className="text-xl font-bold text-gray-800 dark:text-gray-100">Premium Only 🔒</p>
        </div>
      )}
      <img src={tool.icon} alt={`${tool.name} icon`} className="h-12 w-12 mb-4" />
      <h3 className="font-semibold text-xl mb-2">{tool.name}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4">{tool.description}</p>
      <button
        onClick={() => onOpen(tool)}
        disabled={locked}
        className={`px-4 py-2 rounded ${locked ? 'bg-gray-400 cursor-not-allowed' : 'bg-brandBlue text-white hover:bg-blue-700'}`}
      >
        Use Tool
      </button>
    </div>
  );
}
jsx
Copy code
