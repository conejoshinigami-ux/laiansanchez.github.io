/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./src/**/*.{astro,html,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: '#7c5cff',
        cyan: '#00d4ff',
      },
    },
  },
  plugins: [],
}
