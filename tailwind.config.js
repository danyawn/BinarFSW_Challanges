/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-grey': '#f8f4fc',
        'my-green': '#60bc5c',
        'dark-green': '#5ccc5c',
        'dark-blue': '#102ca4',

      }
    },
  },
  plugins: [require('flowbite/plugin')],
}
