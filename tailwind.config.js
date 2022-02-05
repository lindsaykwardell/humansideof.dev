module.exports = {
  content: ["./src/**/*.{vue,js,ts,jsx,tsx,md,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        fira: ["Fira Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
