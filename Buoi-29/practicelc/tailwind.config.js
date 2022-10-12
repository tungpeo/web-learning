/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      icons:{
        'add': "url('https://simplest-react-todo-app.herokuapp.com/static/media/add.74fc797d.svg')",
      }
    },
  },
  plugins: [],
}
