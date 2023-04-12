/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        updown:{
          '0%': {
            transform:'translateY(-20px)',
          },
          '50%': {
            transform:'translateY(30px)',
          },
          '100%': {
            transform:'translateY(-20px)',
          },
          

        }
      },
      animation:{
        updown:'updown 5s linear infinite alternate' ,
      }
    },
  },
  plugins: [],
}

