/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  variants: {
    extend: {
      translate: ['hover'], // enable translate variant on hover
      boxShadow: ['hover'], // enable boxShadow variant on hover
    },
  },
  plugins: [],
};
