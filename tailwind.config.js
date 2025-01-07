/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        brut: "4px 4px 0 black",
        "brut-sm": "2px 2px 0 black",
      },
    },
  },
  plugins: [],
};
