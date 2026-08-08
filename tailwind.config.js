export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        forest: '#0B3B2E',
        healthcare: '#146B50',
        mint: '#A8DCC7',
        sage: '#DDEFE6',
        offwhite: '#F8F7F2',
        gold: '#CDAE72',
        charcoal: '#17231F',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        manrope: ['Manrope', 'sans-serif'],
        serif: ['Crimson Pro', 'serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
}
