/** @type {import('tailwindcss').Config} */

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        cream: '#FFF9F5',
        'baby-pink': '#F4C2C2',
        'warm-pink': '#E8A2A2',
        peach: '#FFDAB9',
        'soft-green': '#D4E4BC',
        'warm-gray': '#5A5A5A',
      },
      fontFamily: {
        sans: ['Questrial', 'sans-serif'],
        serif: ['Ovo', 'serif'],
        accent: ['Petit Formal Script', 'cursive'],
      },
    },
  },
  plugins: [],
}
