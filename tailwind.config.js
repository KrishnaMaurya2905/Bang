// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["ProximaNova"],
        Secondary:["Kano"],
        Decorative:["Melodrama"],
      },
      colors: {
        Primary: "#000",
        Secondary: "", // Add a valid color value or remove it if not used
      },
      transitionTimingFunction: {
        'custom-ease': 'cubic-bezier(0.68, -0.6, 0.32, 1.6)',
      },
      height: {
        'inherit': 'inherit',
      },
      screens: {
        'xs': '400px', 
      },
    },
  },
  plugins: [],
};
