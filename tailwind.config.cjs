/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#333343',
        secondary: '#f0eee9',
      },
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
    },
    plugins: [],
  },
};
