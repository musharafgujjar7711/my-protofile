/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";
import { fontFamily } from "tailwindcss/defaultTheme";
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
      spacing: {
        '15': '3.75rem', // Define 15 as 3.75rem (equal to 60px)
    },
      fontFamily: {
        changa: ['Changa', 'sans-serif'],
        chivo: ['Chivo', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        special: ['Special Elite', 'cursive'],
        sans: ["var(--font-sora)", ...fontFamily.sans],
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },
      
      colors:{
        text2:"#7B7583",
        text1:"#2563eb",
        head:"#10e956",
        about:"#050810",
        1: "#AC6AFF",
        2: "#FFC876",
        3: "#FF776F",
        4: "#7ADB78",
        5: "#858DFF",
        6: "#FF98E2",
        stroke: {
          1: "#26242C",
        },
        n: {
          1: "#FFFFFF",
          2: "#CAC6DD",
          3: "#ADA8C3",
          4: "#757185",
          5: "#3F3A52",
          6: "#252134",
          7: "#15131D",
          8: "#0E0C15",
          9: "#474060",
          10: "#43435C",
          11: "#1B1B2E",
          12: "#2E2A41",
          13: "#6C7275",
        },
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
  plugins: [
    plugin(function ({ addBase, addComponents, addUtilities }) {
      addBase({});
      addComponents({
        ".container": {
          "@apply max-w-[77.5rem] mx-auto px-5 md:px-10 lg:px-15 xl:max-w-[87.5rem]":
            {},
        },
        ".h1": {
          "@apply font-semibold text-[2.5rem] leading-[3.25rem] md:text-[2.75rem] md:leading-[3.75rem] lg:text-[3.25rem] lg:leading-[4.0625rem] xl:text-[3.75rem] xl:leading-[4.5rem]":
            {},
        },
        ".h2": {
          "@apply text-[1.75rem] leading-[2.5rem] md:text-[2rem] md:leading-[2.5rem] lg:text-[2.5rem] lg:leading-[3.5rem] xl:text-[3rem] xl:leading-tight":
            {},
        },
        ".h3": {
          "@apply text-[2rem] leading-normal md:text-[2.5rem]": {},
        },
        ".h4": {
          "@apply text-[2rem] leading-normal": {},
        },
        ".h5": {
          "@apply text-2xl leading-normal": {},
        },
        ".h6": {
          "@apply font-semibold text-lg leading-8": {},
        },
        ".body-1": {
          "@apply text-[0.875rem] leading-[1.5rem] md:text-[1rem] md:leading-[1.75rem] lg:text-[1.25rem] lg:leading-8":
            {},
        },
        ".body-2": {
          "@apply font-light text-[0.875rem] leading-6 md:text-base": {},
        },
        ".caption": {
          "@apply text-sm": {},
        },
        ".tagline": {
          "@apply font-grotesk font-light text-xs tracking-tagline uppercase":
            {},
        },
        ".quote": {
          "@apply font-code text-lg leading-normal": {},
        },
        ".button": {
          "@apply font-code text-xs font-bold uppercase tracking-wider": {},
        },
      });
      addUtilities({
        ".tap-highlight-color": {
          "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
}

