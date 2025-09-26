export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        gold: "#DAA520",
        white: "#FFFFFF",
        darkblue: "#0A192F",
      },
      keyframes: {
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-50px) translateY(-50%)" },
          "100%": { opacity: "1", transform: "translateX(0) translateY(-50%)" },
        },
        "fade-in-right": {
          "0%": { opacity: "0", transform: "translateX(50px) translateY(-50%)" },
          "100%": { opacity: "1", transform: "translateX(0) translateY(-50%)" },
        },
      },
      animation: {
        "fade-in-left": "fade-in-left 1s ease-out forwards",
        "fade-in-right": "fade-in-right 1s ease-out forwards",
      },
    },
  },
  plugins: [],
};
