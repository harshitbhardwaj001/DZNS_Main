/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
      },
      colors: {
        "light-gray": "hsl(219, 4%, 32%)",
        "dark-gray": "hsl(219, 4%, 24%)",
      },
      backgroundColor: {
        "frame-bg": "rgba(25, 25, 25, .87);",
        "home-bg": "#1E1E1E",
      },
      backgroundImage: {
        "1-bg": "url(/dzns.jpg)",
        "2-bg": "url(/graphics1.jpg)",
        "3-bg": "url(/start.jpg)",
        "4-bg": "url(/graphics2.jpg)",
        "5-bg": "url(/graphics3.jpg)",
        "6-bg": "url(/logo1.png)",
        "7-bg": "url(/graphics3.jpg)",
        "8-bg": "url(/graphics3.jpg)",
        "dino-bg": "url(/trex.png)",
        "cactus-bg": "url(/cactus.png)",
        "game-bg": "url(/bgDino.jpg)",
      },
    },
  },
  plugins: [require("tailwind-scrollbar")({ nocompatib: true })],
};
