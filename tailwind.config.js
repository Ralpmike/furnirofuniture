/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#B88E2F",
        secondary: "#2d3748",
        "gray-dark": "#2d3748",
        "gray-light": "#a0aec0",
        white: "#fff",
        black: "#000",
        green: {
          DEFAULT: "#0ACB1D",
          light: "#00C31F0A",
          dark: "#2C9A42",
        },
        red: {
          DEFAULT: "#EA1515",
          light: "#FF9494",
          dark: "#C02020",
        },
        yellow: {
          DEFAULT: "#FF9900",
          light: "#FFB31FB8",
          dark: "#FFD66B",
        },
      },
      fontSize: {
        xs: ["12px", "1.5rem"],
        sm: ["14px", "1.5rem"],
        md: ["18px", "1.5rem"],
        base: ["20px", "1.5rem"],
        lg: ["24px", "1.5rem"],
        xl: ["32px", "1.5rem"],
        "2xl": ["40px", "1.5rem"],
      },
    },
  },
  plugins: [],
};
