/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#FEBD69",
        mainHover: "#F3A847",
      },
      backgroundColor: {
        body: "#E3E6E6",
        primary: "#131921",
        secondary: "#232F3E",
        tertiary: "#37475A",
        tertiaryHover: "#485769",
        quaternary: "#131A22",
      },
      textColor: {
        link: "#007185",
        linkHover: "#C7511F",
        primary: "#0F1111",
      },
      fontFamily: { ember: ["Ember, Arial, sans-serif"] },
      boxShadow: {
        button: "inset 0 0 0 2px #FFF, inset 0 0 0 4px #008296",
      },
    },
  },
  plugins: [],
};
