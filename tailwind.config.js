/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#1f4e79",
          light: "#2b6ca3",
          dark: "#173a59",
          gray: "#f3f4f6",
          border: "#e5e7eb",
          text: "#1f2937",
        },
      },
      boxShadow: {
        subtle: "0 1px 2px rgba(0,0,0,0.05)",
      },
    },
  },
  plugins: [],
};