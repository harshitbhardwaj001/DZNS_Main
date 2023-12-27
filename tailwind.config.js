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
          "home-bg": "#1E1E1E"
      },
      backgroundImage: {
          "1-bg": "url(/dzns.jpg)",
          "2-bg": "url(/2.jpg)",
          "3-bg": "url(/3.jpg)",
          "4-bg": "url(/4.jpg)",
          "5-bg": "url(/5.jpg)",
      },
    },
  },
  plugins: [require('tailwind-scrollbar')({ nocompatib: true })],
}

