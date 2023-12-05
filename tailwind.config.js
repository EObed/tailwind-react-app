/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors:{
        custom: {
        'bluey': '#263043',
        'oxford': '#002147',
        'hovery': 'rgba(255, 255, 255, 0.2)'
       }
      },
    },
   
    screens:{
      'medium': '992px',
      'small': '768px',
      'extra-small': '576px',
      'tiny': '320px'
    }
  },
  plugins: [],
}

