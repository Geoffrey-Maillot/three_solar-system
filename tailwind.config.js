/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}', './**/*.html'],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#dea4fc",
          "secondary": "#27aa6b",
          "accent": "#dd4bea",
          "neutral": "#26323b",
          "base-100": "#464749",
          "info": "#3461cb",
          "success": "#78eda5",
          "warning": "#f6c451",
          "error": "#ee1b4c",
        },
      },
    ],
  },
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
