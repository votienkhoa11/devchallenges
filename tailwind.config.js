/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            'white-charcoal': '#E0E0E0',
            'white-flash': ' #F2F2F2',
            'white-ghost': '#FAFBFD',
            'dark-charcoal': '#333333',
            'black-olive': '#3F3F3F',
            'silver-foil': '#AEAEAE',
            'silver-old': '#828282',
            'blue-marine': '#3D5AFE',   
            'blue': '#2962FF',
            'gray': '#9E9E9E',
            'deep-pace': '#455A64',
            'red-venetian': '#CC1512',
            'blue-crayola': '#0039CB',
            'blue-yankees': '#1C313A',
            'red-crimson': '#9A0007',
            'red-persian': '#D32F2F',
            'orange-portland': '#F7542E',
            'blue-black': '#090F31',
            'gray-1': '#BDBDBD',
            'blue-58': '#2F80ED',
        }   
    },
  },
  plugins: [],
}

