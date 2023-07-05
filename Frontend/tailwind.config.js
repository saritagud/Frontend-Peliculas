/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fondo: "#1D1E22",
        verde: "#26BF21",
        verde2: "#33A621",
      },
      fontFamily: {
        Coda: ["Coda", "cursiva"],
        Marcellus: ["Marcellus SC", "serif"],
      },
      backgroundImage: {
        Card: "url('src/assets/posterCars.webp')",
      },
      screens: {
        p: "250px",
        // => @media (min-width: 250px) { ... }
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }

        ur: "1920px",
        // => @media (min-width: 1920px) { ... }
      },
    },
  },
  plugins: [],
};
