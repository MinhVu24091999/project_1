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
        ring: {
          "0%": { transform: "rotate(0deg)" },
          "15%": { transform: "rotate(1deg)" },
          "30%": { transform: "rotate(-1deg)" },
          "45%": { transform: "rotate(1deg)" },
          "60%": { transform: "rotate(-1deg)" },
          "75%": { transform: "rotate(1deg)" },
          "100%": { transform: "rotate(0deg)" },
        },
        zoomLoop: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.2)", opacity: "0.9" },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
            transform: "translateX(-50%) translateY(50px)",
          },
          "100%": { opacity: "1", transform: "translateX(-50%) translateY(0)" },
        },
        fadeOut: {
          "0%": { opacity: "1", transform: "translateX(-50%) translateY(0)" },
          "100%": {
            opacity: "0",
            transform: "translateX(-50%) translateY(50px)",
          },
        },
      },
      animation: {
        "wave-1": "wave 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite",
        "wave-2": "wave 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.2s",
        "wave-3": "wave 1.5s cubic-bezier(0.4, 0, 0.2, 1) infinite 0.4s",
        ring: "ring 0.6s ease-in-out",
        zoomLoop: "zoomLoop 1.5s ease-in-out infinite",
        fadeIn: "fadeIn 0.5s ease-in forwards",
        fadeOut: "fadeOut 0.5s ease-out forwards",
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
