/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './*.html',
  ],
  // Disable Tailwind's CSS reset – the Hyperspace SCSS handles global resets.
  corePlugins: {
    preflight: false,
  },
  theme: {
    extend: {
      colors: {
        // Matches the project-title accent colour used across all project cards.
        'project-accent': 'rgba(255, 215, 147, 0.77)',
        // Hyperspace palette colours exposed as Tailwind tokens.
        'site-bg': '#312450',
        'site-accent': '#5e42a6',
      },
    },
  },
  plugins: [],
};
