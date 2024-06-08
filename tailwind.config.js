/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      spacing: {
        "1/9": "11.11%",
        "2/9": "22.22%",
        "3/9": "33.33%",
        "4/9": "44.44%",
        "5/9": "55.55%",
        "6/9": "66.66%",
        "7/9": "77.77%",
        "8/9": "88.88%",
      },
    },
  },
  plugins: [],
};
