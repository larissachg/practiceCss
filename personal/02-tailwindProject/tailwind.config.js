/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fondo: {
          DEFAULT: "#14b8a6",
          100: "#0f766e",
        },
      
      },
    },
  },
  plugins: [],
};
