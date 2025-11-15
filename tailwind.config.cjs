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
          surface2: "rgb(var(--color-brand-surface-2) / <alpha-value>)",
        },
        // Convenience aliases for red/black styling using the brand CSS vars
        danger: {
          DEFAULT: "rgb(var(--color-brand-primary) / <alpha-value>)",
          700: "rgb(var(--color-brand-primary-2) / <alpha-value>)",
        },
        blackbrand: {
          DEFAULT: "rgb(var(--color-brand-surface) / <alpha-value>)",
          900: "rgb(var(--color-brand-surface-2) / <alpha-value>)",
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
