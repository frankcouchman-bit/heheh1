import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Backdrop from './Backdrop';

// Animation variants for modal drop-in effect
const dropIn = {
  hidden: { y: '-100vh', opacity: 0 },
  visible: {
    y: '0',
    opacity: 1,
    transition: { duration: 0.3, type: 'spring', damping: 25, stiffness: 500 },
  },
  exit: { y: '100vh', opacity: 0 },
};

export default function ToolModal({ tool, onClose }) {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Call backend API for the tool (placeholder URL)
    try {
      const res = await fetch(`/api/tools/${tool.id}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input }),
      });
      const data = await res.json();
      setOutput(data.output || 'Generated content...');
    } catch (err) {
      setOutput('An error occurred.');
    }
    setLoading(false);
  };

  return (
    <AnimatePresence exitBeforeEnter>
      <Backdrop onClick={onClose}>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          className="bg-white dark:bg-gray-900 rounded-lg p-6 max-w-xl w-full"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h2 className="text-2xl font-bold mb-4">{tool.name}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Enter your topic or keywords..."
              className="w-full p-3 border rounded dark:bg-gray-700 dark:border-gray-600"
              rows={4}
              required
            />
            <button
              type="submit"
              className="px-4 py-2 bg-brandBlue text-white rounded hover:bg-blue-700"
              disabled={loading}
            >
              Generate
            </button>
          </form>
          {loading && (
            <div className="flex justify-center my-4">
              <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full" />
            </div>
          )}
          {output && (
            <div className="mt-4 p-3 border rounded dark:border-gray-600 dark:bg-gray-800">
              {output}
            </div>
          )}
          <button onClick={onClose} className="mt-4 text-sm underline">Close</button>
        </motion.div>
      </Backdrop>
    </AnimatePresence>
  );
}
