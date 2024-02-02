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
        }
      },
      animation: {
        slider: 'slider 40s linear infinite',
        'slideFromRightToLeft': 'slideFromRightToLeft 12s linear',
      },
    },
  },
  plugins: [],
};
