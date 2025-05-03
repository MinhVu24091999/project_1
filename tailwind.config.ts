import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blue: "#050C9C",
        green: "#01B202",
        orange: "#FF7F02",
        red: "#E70012",
        yellow: "#FDC500",
        primary: "#050C9C",
        black: '#1D1D1D',
        gray: '#AFB5AE',
        'steel-blue': "#3F5275",
        "soft-white": "#F6F7F4"
      },
      width: {
        container: "1440px",
      },
      fontFamily: {},
      backgroundImage: {},
    },
    screens: {
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1360px",
      "2xl": "1440px",
    },
  },
  plugins: [],
} satisfies Config;
