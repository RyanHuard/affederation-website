/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    colors: {
      "aff-blue": "#013369",
      "aff-orange": "#e49740",
    }
  },
  },
  plugins: [],
}