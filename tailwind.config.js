/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // 'primary': '#5B6CFF',
        primary: "#38b8fc",
        secondary: "#3a87b5",
        tertiary: "#fda203",
        backgroundcolor: "#f2e9f3",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        inter: ["Inter", "sans-serif"],
      },
      backgroundImage: {
        section4: "url('/src/assets/images/section4-img.png')",
      },
    },
  },
  plugins: [],
};
