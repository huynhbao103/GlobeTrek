/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'Login-register': "url('./assets/Login-register.png')",
      },
    },
  },
  plugins: [],
}

