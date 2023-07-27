import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: [
    "./components/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./pages/**/*.{js,jsx,ts,tsx}",
  ],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      semanticTokens: {
        colors: {
          primary: {
            900: { value: "hsla(94, 100%, 10%, 1)" },
            800: { value: "hsla(94, 72%, 16%, 1)" },
            700: { value: "hsla(95, 60%, 21%, 1)" },
            600: { value: "hsla(95, 51%, 27%, 1)" },
            500: { value: "hsla(95, 46%, 33%, 1)" },
            400: { value: "hsla(96, 43%, 39%, 1)" },
            300: { value: "hsla(96, 41%, 45%, 1)" },
            200: { value: "hsla(96, 39%, 50%, 1)" },
            100: { value: "hsla(96, 47%, 56%, 1)" },
            50: { value: "hsla(97, 58%, 62%, 1)" },
            25: { value: "hsla(97, 72%, 67%, 1)" },
          },
          darkText: { value: "#1a3108" },
        },
      },
      keyframes: {
        rotateRectangle: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        "pop-in": {
          "0%": {
            opacity: "0",
            transform: "scale(.1)",
          },

          "100%": {
            opacity: "1",
            transform: "scale(1)",
          },
        },
        "fade-in": {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
        "slide-up": {
          "0%": {
            bottom: "-85",
          },
          "100%": {
            bottom: "0",
          },
        },
      },
    },
  },
  jsxFramework: "react",

  // The output directory for your css system
  outdir: "styled-system",
});
