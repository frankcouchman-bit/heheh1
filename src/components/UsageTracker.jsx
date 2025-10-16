import React from 'react';

export default function UsageTracker({ data }) {
  // Example data: { rewrite: { used: 3, limit: 5 }, blog: { used: 7, limit: 10 }, ... }
  return (
    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded">
      <h3 className="font-semibold mb-2">Usage This Month</h3>
      {Object.entries(data).map(([tool, { used, limit }]) => {
        const percent = Math.min((used / limit) * 100, 100);
        return (
          <div key={tool} className="mb-2">
            <div className="flex justify-between text-sm">
              <span>{tool}</span>
              <span>{used}/{limit}</span>
            </div>
            <div className="bg-gray-300 dark:bg-gray-700 h-2 rounded">
              <div
                className="bg-brandBlue h-2 rounded"
                style={{ width: `${percent}%` }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
jsx
Copy code
