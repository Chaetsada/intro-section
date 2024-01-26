/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'white':'hsl(0, 0%, 98%)',
        'gray':'hsl(0, 0%, 41%)',
        'black':'hsl(0, 0%, 8%)',
      },
    },
  },
  plugins: [],
}

