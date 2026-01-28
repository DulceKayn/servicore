/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-red': '#C40000',
        'brand-red-dark': '#B00000',
        'gray-light': '#F2F2F2',
        'gray-medium': '#9B9B9B',
        'gray-dark': '#2B2B2B',
        'gray-darker': '#1F1F1F',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};