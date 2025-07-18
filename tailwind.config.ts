import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        roboto: ["var(--font-roboto)", "sans-serif"],
        oswald: ["var(--font-oswald)", "sans-serif"],
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
        bgTitleClipPath: "linear-gradient(90deg, #00225A 12.79%, #0D2A84 35.85%, #3A1D8E 64.78%, #FF4E36 100%)",
        bgTest: "linear-gradient(180deg, #181819 0%, #151515 25.48%, #1F1F1F 50%, #151515 76.44%, #181819 100%)",
      },
      keyframes: {
        fullBlock: {
        "0%": { transform: "translate(-10%, 100%) scale(1)", opacity: "0" },
        "50%": { transform: "translateY(0)", opacity: "1" },
        "100%": { transform: "translateY(0) scale(1.5)", opacity: "1" },
      },
      slideUp: {
        "0%": { transform: "translate(-5%, 100%)", opacity: "0" },
        "100%": { transform: "translateY(0)", opacity: "1" },
      },
      slideDownDesktop: {
        "0%": { height: "58px" },
        "100%": { height: "0" },
      },
      slideDownMobile: {
        "0%": { height: "40px" },
        "100%": { height: "0" },
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
      test1: {
        "0%": {
          transform: "translate3d(0, 0, 0) scaleX(1)",
          transformOrigin: "100% 50%",
        },
        "100%": {
          transform: "translate3d(.1em, 0, 0) scaleX(0)",
          transformOrigin: "100% 50%",
        },
      },
      test2: {
        "0%": {
          transform: "translateX(-100%)",
        },
        "100%": {
          transform: "translateX(101%)",
        },
      },

      test_3: {
        "0%": {
          transform: "translateX(3%)",
        },
        "90%": {
          transform: "translateX(0%)",
        },
        "100%": {
          transform: "translateX(0%)",
        },
        },
      
        test: {
          "0%": {
          width: "0",
        },
        "100%": {
          width: "100%",
        },
      }
      },
      animation: {
        "full-block": "fullBlock 2s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "slide-down-desktop": "slideDownDesktop 1s ease-out forwards",
        "slide-down-mobile": "slideDownMobile 1s ease-out forwards",
        fadeIn: "fadeIn 0.5s ease-in forwards",
        fadeOut: "fadeOut 0.5s ease-out forwards",
        test1: "test1 1.2s cubic-bezier(1,0,0,1) forwards",
        test2: "test2 1.2s cubic-bezier(1,0,0,1) forwards",
        test3: "test_3 1.4s cubic-bezier(1,0,0,1) forwards",
        test: "test 1.2s cubic-bezier(1,0,0,1) forwards",
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
