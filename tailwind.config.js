
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        mustard: "#F0A500",
        deepNavy: "#0C0633",
        purpleBrand: "#6D28D9"
      },
      boxShadow: {
        brand: "0 0 20px rgba(240,165,0,0.6)"
      }
    },
  },
  plugins: [],
}
