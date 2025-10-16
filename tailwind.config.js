/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',  // use class strategy for dark mode:contentReference[oaicite:18]{index=18}
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      // Extend with any custom colors or styles
      colors: {
        brandBlue: '#3b82f6',
      },
    },
  },
  plugins: [],
};
