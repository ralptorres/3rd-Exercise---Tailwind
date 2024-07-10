/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        customColor: "rgba(37, 37, 37, 0.8)",
        buttonColor: "rgba(37, 37, 37, 1)",
      },
      screens: {
        ss: "0px",
        sm: "640px", // Small screens (default: 640px)
        md: "768px", // Medium screens (default: 768px)
        lg: "1024px", // Large screens (default: 1024px)
        xl: "1280px", // Extra large screens (default: 1280px)
        // Add more custom breakpoints as needed
      },
    },
  },
  plugins: [],
};
