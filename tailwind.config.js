module.exports = {
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    mode: 'layers',
    content: ['./src/**/*.html', './src/**/*.{js,jsx,ts,tsx}'],
  },
  theme: {},
  variants: {},
  plugins: [],
};
