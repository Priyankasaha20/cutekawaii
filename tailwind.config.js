// tailwind.config.js
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["var(--font-poppins)"],
      },
      colors: {
        "pale-pink": "#FEE8E6",
        "light-pink": "#FFECE9",
        "medium-pink": "#FFC2B5",
        "accent-pink": "#FF9E9E",
        beige: "#E0CFC7",
      },
    },
  },
  plugins: [],
};
