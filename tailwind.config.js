/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens:{
         Xl:"1400px"
      },
      container: {
        center: true,
        // screens: {
        //   sm: "540px",
        //   md: "720px",
        //   lg: "1044px",
        //   xl: "1140px",
        // },
      },
      fontFamily: {
        Poppins: "'Poppins', sans-serif",
        khula: "'khula' , sans-serif",
      },
      colors: {
        darkWhite20: "#424C61",
        darkWhite70: "#B5B9C2",
        darkWhite: "#FAFAFA",
        lightwhite: "#B4BBC0",
        white70: "#B8BCC4",
        blue: "#152340",
        darkWhite8: "#FAFAFA14",
      },
      backgroundColor: {
        bodyBlue: "#111C33",
      },
      backgroundImage: {
        btnBlueGradient:
          "linear-gradient(147.49deg, #2DE2FB 7.04%, #1B4EC8 59.53%)",
        btnBluehover:
          "linear-gradient(147.49deg,#1B4EC8 7.04%, #2DE2FB 59.53%)",
      },
      backgroundSize: {
        full: "100% 100%",
      },
      boxShadow: {
        CardShadaw: "0px 0px 14px 0px #2DE2FB26",
      },
    },
  },
  plugins: [],
};
