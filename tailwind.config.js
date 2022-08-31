module.exports = {
  content: ["./app/**/*.{html,ejs}"],
  theme: {
    screens: {
      'sm': '576px',
      'md': '768px',
      'lg': '992px',
      'xl': '1280px',
      '2xl': '1320px',
    },
    container: {
      center: true,
      padding: '12px',
    },
    fontSize: {
      sm: ['14px', '1.5'],
      base: ['16px', '1.5'],
      lg: ['18px', '1.5'],
      xl: ['19px', '1.5'],
      '2xl': ['20px', '1.5'],
      '3xl': ['24px', '1.5'],
      '4xl': ['32px', '1.5'],
      '5xl': ['36px', '1.5'],
      '6xl': ['42px', '1.5'],
      '7xl': ['48px', '1.5'],
      '8xl': ['64px', '1.5']
    },
    extend: {
      colors: {
        'primary': {
          // light: '#FBF2F2',
          DEFAULT: '#AA0601',
          dark: '#650300',
        },
        'red': {
          50: '#FBF2F2',
        },
        'brown': {
          light: '#B75929',
          dark: '#5F3E2D',
        },
        'maroon': {
          DEFAULT: '#9F1213',
        },
        'gray': {
          100: '#f3f4f6',
          200: '#DEE2E6',
          300: '#DCDCDC',
          400: '#707070',
          500: '#555555',
          600: '#495057',
          700: '#374151',
          800: '#00000020',
          900: '#212529',
        },
      },
      boxShadow: {
        'base': '0 2px 6px #00000029',
      },
      backgroundImage: {
        'index-header': "url('../images/home-header.png')",
        'index-header-sm': "url('../images/home-header-sm.png')",
        'index-co-branding': "url('../images/index-bg.png')",
        'series-optical-img1-sm': "url('../images/product-header-sm-1.png')",
        'series-optical-img1': "url('../images/product-header-1.png')",
        'series-optical-img2-sm': "url('../images/product-header-sm-2.png')",
        'series-optical-img2': "url('../images/product-header-2.png')",
        'series-sun-img3-sm': "url('../images/product-header-sm-3.png')",
        'series-sun-img3': "url('../images/product-header-3.png')",
        'series-sun-img4-sm': "url('../images/product-header-sm-4.png')",
        'series-sun-img4': "url('../images/product-header-4.png')",
      },
      spacing: {
        '15': '60px',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
  ],
}