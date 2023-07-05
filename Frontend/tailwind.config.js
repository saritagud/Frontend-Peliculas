/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fondo: "#1D1E22",
        verde: "#26BF21",
        "verde2": "#33A621"
      },
      fontFamily: {
        Coda: ["Coda", "cursiva"],
        Marcellus: ["Marcellus SC", "serif"],
      },
      backgroundImage: {
        Card: "url('src/assets/posterCars.webp')",
      
      },
    },
  },
  plugins: [],
}

