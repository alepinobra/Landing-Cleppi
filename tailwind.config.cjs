/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000050",
        texto_header: "#B6B6C6",
        texto_cuerpo: "#EAEAEF",
        boton_ingreso: "#FFC90B",
        boton_probar: "#03C355",
        texto_naranja: "#FB7236",
        color_fondo: "#FAFAFA",
        secondary: "#EAEAFC",
        celeste: "#00BDFF",
      }
    },
  },
  plugins: [],

 
}
