import type { Config } from "tailwindcss";
import daisyui from 'daisyui';
const { createThemes } = require('tw-colors');

export default {
  darkMode: 'class',
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  plugins: [
    daisyui,
    createThemes({
      light: {
        'primary': {
          'text': 'rgb(255 255 255)',
          'bg': '#FFF3E0',
          '100': '#FFE0B2',
          '200': '#FFCC80',
          '300': '#FFB74D',
          '400': '#FFA726',
          '500': '#FF9800',
          '600': '#FB8C00',
          '700': '#F57C00',
          '800': '#EF6C00',
          '900': '#E65100',
        },
        'secondary': {
          '100': '#82B1FF',
          '200': '#448AFF',
          '300': '#2979FF',
          '400': '#2962FF',
        },
        'tertiary': {
          '100': '#CCFF90',
          '200': '#B2FF59',
          '300': '#76FF03',
          '400': '#64DD17',
        },
      },
      dark: {
        'primary': {
          'text': 'rgb(148 163 184)',
          'bg': '#424242',
          '100': '#F5F5F5',
          '200': '#EEEEEE',
          '300': '#E0E0E0',
          '400': '#BDBDBD',
          '500': '#9E9E9E',
          '600': '#757575',
          '700': '#616161',
          '800': '#424242',
          '900': '#212121',
        },
        'secondary': {
          '100': '#B388FF',
          '200': '#7C4DFF',
          '300': '#651FFF',
          '400': '#6200EA',
        },
        'tertiary': {
          '100': '#CCFF90',
          '200': '#B2FF59',
          '300': '#76FF03',
          '400': '#64DD17',
        },
      }
    })
  ],
  theme: {
    extend: {
    }
  },
} satisfies Config;
