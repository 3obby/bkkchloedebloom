/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': {'max': '400px'}, // Add custom breakpoint for extra small screens
      },
    },
  },
  variants: {
    extend: {
      fill: ['hover', 'focus'],
      backdropBlur: ['responsive'],
    },
  },
  plugins: [],
  safelist: [
    {
      pattern: /shadow-\[.*\]/, // Allows arbitrary shadow values
    },
  ],
};
