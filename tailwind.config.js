/** @type {import('tailwindcss').Config} */
// import image1 from "./src/Assets/Images/Post/Rectangle 62.png"
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
  
  ],
  theme: {
    borderWidth: {
      DEFAULT: '1px',
      '0': '0',
      '1':'1px',
      '2': '2px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
    },
   
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/Assets/Images/Post/Rectangle 62.png')",
     
      },
      colors: {
        'blue': '#386EFA',
        'screen':'#181A19',
        'yellow': '#FCBF49',
        'red': '#FA3838',
        'dark': '#1C1C1C',
        'dark2': ' #343434',


      'indigo': '#6610f2',
      'purple': '#6f42c1',
      'pink': '#e83e8c',
      
      'orange': '#fc5120',
     
      'green': '#43b02a',
      'teal': '#20c997',
      'cyan': '#1ba9e0',
      'white': '#fff',
      'gray': '#e1e1e1',
      'gray-dark': '#ccc',
      'primary': '#0858a2',
      'secondary': '#6c757d',
      'success': '#43b02a',
      'info': '#1ba9e0',
      'warning': '#ffdb3c',
      'light': '#f8f9fa',
     
       },
       height: {
        '500': '510px',
      },
      screens: {
        xs: "480px",
        sm: "576px",
        md: "768px",
        lg: "992px",
        xl: "1200px",
        "2xl": "1536px",
      },
      container: {
        center: true,
       
        padding: '2rem',
       
      },
   
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },

    },
  },
   plugins: [
 
  ],
}