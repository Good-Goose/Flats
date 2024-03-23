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
        'gray-middle': '#CCCCCC',
        'gray-dark-1': '#898989',
        'gray-light': '#F5F5F5'
      }
    },
  },
  plugins: [],
}

