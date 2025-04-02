module.exports = {
  darkMode: "class",
  content: ['./src/**/*.{html,js}'], // Adjust paths to your project
  theme: {
    extend: {

    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ['light'], // Define themes here
  },
};