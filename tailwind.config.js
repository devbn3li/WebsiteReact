/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      keyframes: {
        slider: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-250px * 7))'}
        },
        slideFromRightToLeft: {
          '0%': { right: '100%' },
          '100%': { right: '-20%' },
        },
        spotlight: {
          "0%": {
            opacity: 0,
            transform: "translate(-72%, -62%) scale(0.5)",
          },
          "100%": {
            opacity: 1,
            transform: "translate(-50%,-40%) scale(1)",
          },
        },
      },
      animation: {
        slider: 'slider 40s linear infinite',
        'slideFromRightToLeft': 'slideFromRightToLeft 12s linear',
        spotlight: "spotlight 2s ease .75s 1 forwards",

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
