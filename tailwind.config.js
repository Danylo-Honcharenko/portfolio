/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    screens: {
      'md': '778px',
      'lt': '567px',
      'lg': '1600px',
      'pre_md': '867px'
    },
  },
  plugins: [],
}

