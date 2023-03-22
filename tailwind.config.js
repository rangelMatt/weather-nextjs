/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        tilt: "tilt 10s infinite linear",
        "fade-in-down": "fade-in-down 0.5s ease-out",
      },
      keyframes: {
        tilt: {
          "0%, 50%, 100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(3deg)",
          },
          "75%": {
            transform: "rotate(-3deg)",
          },
        },
      },
      "fade-in-down": {
        "0%": {
          opacity: "0",
          transform: "translateY(-10px)",
        },
        "100%": {
          opacity: "1",
          transform: "translateY(0)",
        },
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
      },
      transitionDuration: {
        0: "0ms",
        2000: "2000ms",
      },
      transitionDelay: {
        0: "0ms",
        2000: "2000ms",
      },
    },
    safelist: [
      "animate-[fade-in_1s_ease-in-out]",
      "animate-[fade-in-down_1s_ease-in-out]",
    ],
  },
  plugins: [],
};
