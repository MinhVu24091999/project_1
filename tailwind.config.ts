import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"M PLUS 1p"', ...fontFamily.sans],
        serif: ['"Noto Serif JP"', ...fontFamily.serif],
      },
      backgroundImage: {
        header: "url('/images/bg_header.jpg')",
        dots: "url('/images/bg_dots.png')",
        evolution: "url('/images/bg_evolution.png')",
        about: "url('/images/bg_about.png')",
        comment: "url('/images/comment.png')",
        "tracou-hunter": "url(/images/bg_tracou.png)",
        "title-green": "url('/images/bg_title_green.png')",
        "title-red": "url('/images/bg_title_red.png')",
        "title-orange": "url('/images/bg_title_orange.png')",
        "next-generation": "url('/images/bg_generation.png')",
        "evolution-content": "url('/images/bg_evolution_2.png')",
      },
      keyframes: {
        wave: {
          "0%, 100%": { opacity: "0.2", transform: "translateY(0)" },
          "50%": { opacity: "1", transform: "translateY(6px)" },
        },
      },
      animation: {
        "wave-1": "wave 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "wave-2": "wave 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.2s",
        "wave-3": "wave 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.4s",
      },
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
