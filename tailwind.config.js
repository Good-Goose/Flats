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
    colors: {
      'grey-text': '#898989'
    }
  },
  plugins: [],
}

