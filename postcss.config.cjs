// postcss.config.cjs

module.exports = {
  plugins: {
    '@tailwindcss/postcss': {}, // <-- Correct
    autoprefixer: {},
  },
}
