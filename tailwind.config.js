/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./resources/**/*.blade.php", // Untuk class di file blade
    "./resources/**/*.js",        // Untuk file JS standar
    "./resources/**/*.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}