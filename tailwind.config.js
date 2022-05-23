module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-light': '#2e3545',
        'blue-dark': '#232834',
        'orange-dark': '#d67430',
        'orange-light': '#ff443a',
        'gray-dark': '#808080',
        'gray-light': '#e6e6e6',
      },
      screens: {
        'sm': '576px',

        'md': '768px',

        'lg': '991px',
      },
      /* cursor: {
        default: 'url(https://play.tailwindcss.com/favicons/favicon-16x16.png?v=3), default',
        pointer: 'url(https://play.tailwindcss.com/favicons/favicon-16x16.png?v=3), pointer',
      } */
    },
  },
  plugins: [],
}
