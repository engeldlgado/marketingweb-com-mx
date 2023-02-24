/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      bgGradientDeg: {
        165: '165deg'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))'
      }
    }
  },
  darkMode: 'class',
  daisyui: {
    themes: [
      {
        dark: {
          ...require('daisyui/src/colors/themes')['[data-theme=dark]'],
          primary: '#0D47A1',

          secondary: '#fb8532',

          accent: '#7ee787',

          neutral: '#2A303C',

          'base-100': '#0d1117',

          info: '#2188ff',

          success: '#28a745',

          warning: '#ffdf5d',

          error: '#bd2c00'
        },
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          primary: '#c75200',

          secondary: '#fb8532',

          accent: '#7ee787',

          neutral: '#0d1117',

          info: '#2188ff',

          success: '#28a745',

          warning: '#ffdf5d',

          error: '#bd2c00'
        }
      }
    ]
  },
  plugins: [
    require('daisyui'),
    require('tailwindcss-gradient')
  ]
}
