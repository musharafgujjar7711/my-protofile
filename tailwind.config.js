/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeInDown: 'fadeInDown 2s ease-out forwards',
      },
      keyframes: {
        fadeInDown: {
          '0%': { opacity: 0, transform: 'translateY(-20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      
      transitionDuration: {
        '2000': '2000ms',
      },
 
      fontFamily: {
        changa: ['Changa', 'sans-serif'],
        chivo: ['Chivo', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors:{
        text2:"#7B7583",
        text1:"#2563eb",
      },
      container: {
        center: true,
        padding:{
          DEFAULT:"1rem",
          sm:"3rem"
        },
        screens :{
          lg:"1440px",
          xl:"1440px",
          "2xl":"1440"
        }
       
  
        },

    },
  },
  plugins: [],
}

