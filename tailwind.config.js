// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
        playfair: ["var(--font-playfair)"],
        grotesk: ["var(--font-space-grotesk)"],
        poppins: ["var(--font-poppins)"],
        code: ["var(--font-fira)"],
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
