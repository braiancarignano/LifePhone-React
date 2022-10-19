/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      margin: {
        '580px': '580px',
        '720px': '720px',
      },
      backgroundImage: {
        'img-features': "url('https://www.xiaomiadictos.com/wp-content/uploads/2021/02/smartphones-menos-resistentes-20201.jpg')",
      },
      blur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}
