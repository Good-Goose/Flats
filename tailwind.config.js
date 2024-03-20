/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,vue,ts}",
    "./src/shared/layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        'dark': '#353536',
        'gray-primary': '#CCCCCC',
        'gray-secondary': '#898989',
        'grey-text': '#898989'
      }
    },
  },
  plugins: [],
}

