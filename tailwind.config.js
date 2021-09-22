module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "bg_color": "#1ba1ad",
        "light_text": "#919094"
      },
      backgroundImage: {
        "card_top": "url(./images/bg-pattern-card.svg)",
        "bg_pattern_top": "url(./images/bg-pattern-top.svg)"
      }
    },

    container: {
      center: true
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
