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
        special: ['Special Elite', 'cursive'],
      },
      
      colors:{
        text2:"#7B7583",
        text1:"#2563eb",
        head:"#10e956",
        about:"#050810",
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
    animation: {
      wobble: 'wobble 2.5s ease infinite',
    },

    keyframes: {
      wobble: {
        '0%, 100%': { transform: 'translateX(0)' },
        '15%': { transform: 'translateX(-30px) rotate(-5deg)' },
        '30%': { transform: 'translateX(15px) rotate(5deg)' },
        '45%': { transform: 'translateX(-10px) rotate(-2deg)' },
        '60%': { transform: 'translateX(5px) rotate(2deg)' },
        '75%': { transform: 'translateX(-5px)' },
      },
    },
  },
  plugins: [],
}

