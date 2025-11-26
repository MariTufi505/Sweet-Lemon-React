/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    extend: {
      colors: {
        'rosa-suave': {
          DEFAULT: '#f4acb7'
        },
        'rosita-claro': {
          DEFAULT: '#FFCAD4'
        },
        'borde-navbar': {
          DEAFULT: '#9D8189'
        },
        'fondo-productos': {
          DEFAULT: '#F8EBEB'
        },
        'fondo-coral': {
          DEFAULT: '#FCD5CE'
        }
      }
    }
  },

  plugins: []
}
