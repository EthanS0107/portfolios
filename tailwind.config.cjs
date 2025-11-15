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
          primary: "rgb(var(--color-brand-primary) / <alpha-value>)",
          muted: "rgb(var(--color-brand-muted) / <alpha-value>)",
          text: "rgb(var(--color-brand-text) / <alpha-value>)",
          surface: "rgb(var(--color-brand-surface) / <alpha-value>)",
          success: "rgb(var(--color-brand-success) / <alpha-value>)",
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
