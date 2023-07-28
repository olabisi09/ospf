/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      'main': '#F55656',
      'blue': '#1fb6ff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#625B5B',
      'gray-light': '#92A7BF',
      'white': '#ffffff',
      'main-light': '#FAF6F6',
      'main-text': '#204672',
      'purple': '#8B11C5',
      'red': '#CF0000',
      'description': '#B7B4B4',
      'orangeLight': '#FDF7F7',
      'ellipses': '#D9D9D9'
    },
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [],
  },
}
