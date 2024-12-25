/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "inter": ['Inter', 'serif'],
      },
      boxShadow: {
        "outer": "0px 0px 24px 0px rgba(8, 23, 53, 0.16)",
      },
      backgroundColor: {
        "blue": "#1570EF"
      },
      borderColor: {
        "gray": "#D5D7DA"
      }
    },
  },
  plugins: [],
}