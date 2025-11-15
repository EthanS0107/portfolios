/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          primary: {
            DEFAULT: "#5e787d",
          },
          muted: {
            DEFAULT: "#d9d9d9",
          },
          text: {
            DEFAULT: "#545454",
          },
          surface: {
            DEFAULT: "#ffffff",
          },
        },
      },
      container: {
        center: true,
        padding: "1rem",
      },
    },
  },
  plugins: [],
};
