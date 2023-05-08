/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    'pages/**/*.{js,jsx,ts,tsx}',
    'components/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem',
        '9/10': '90%'
      },
      minHeight: {
        '2/5': '40vh'
      }
    },
  },
  plugins: [
    require('daisyui')
  ],
}

