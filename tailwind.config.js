/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'monoton': ['monoton', 'sans-serif'],
        'libre': ['Libre Barcode 128 Text'],
        'rowdies': ['rowdies', 'sans-serif'],
      },
      colors: {
        'background-color': '#1e1b18',
        'primary': '#87CEEB',
        'secondary': '#F8E16C',
        'tertiary': '#ADA0A6',
        'white': '#fffaff',
        'subText': '#617B70',
      },
    },
  },
  plugins: [],
}

