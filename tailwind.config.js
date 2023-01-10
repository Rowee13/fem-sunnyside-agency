/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "soft-red": "hsl(7, 99%, 70%)",
        yellow: "hsl(51, 100%, 49%)",
        "desaturated-cyan": "hsl(167, 40%, 24%)",
        "dark-blue": "hsl(198, 62%, 26%)",
        "moderate-cyan": "hsl(168, 34%, 41%)",
        "desaturated-blue": "hsl(212, 27%, 19%)",
        "dark-grayish-blue": "hsl(213, 9%, 39%)",
        "grayish-blue": "hsl(232, 10%, 55%)",
        "light-gray": "hsl(210, 4%, 67%)",
        white: "hsl(0, 0%, 100%)",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        fraunces: ["Fraunces", "serif"],
      },
      // backgroundImage: {
      //   "hero-image-desktop": "url('../assets/desktop/image-header.jpg)",
      // },
    },
  },
  plugins: [],
};
