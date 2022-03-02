const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    fontSize: {
      3.5: ".875rem",
      4: "1rem",
      5: "1.25rem",
      7: [
        "1.75rem",
        {
          letterSpacing: "-.03em",
        },
      ],
    },
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      dropShadow: {
        nav: "0px 0px 16px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
