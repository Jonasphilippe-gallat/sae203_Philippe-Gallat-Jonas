module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {


    extend: {
      Fontfamily: {
        "Inter": ['Inter'],
        "BebasNeue": ['Bebas Neue']
      },
      fontSize: {
        'xxs': '.5rem',
        'magofaisduxs': '.4rem',
        'xxxs': '.25rem',
      },
    },
  },
  plugins: [],
}
