/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './**/*.html'],
  theme: {
    extend: {
      backgroundImage: {
    'scene-bg-stars': 'url("/src/assets/texture/hd/2k_stars.jpg")',
    'scene-bg-stars_milky_way': 'url("/src/assets/texture/hd/2k_stars_milky_way.jpg")'
}
    },
  },
  plugins: [require('daisyui')],
};
