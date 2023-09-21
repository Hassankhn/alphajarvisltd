/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "banner-bg": "url(../public/assets/images/night.jpg)",
        "aboutus-bg": "url(../public/assets/images/Beachside.jpg)"
      },
    },
  },
  plugins: [],
}
