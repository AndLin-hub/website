/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      blur:{
        xxl: '150px'
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',

      },
      inset:{
        '1/8': "18%",
        '3/10':"30%",
        '4/10':"45%",
        '6/10':"60%"
      }
    },
  },
  plugins: [],
}

