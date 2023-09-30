import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0px 4px 10px 0px rgba(0, 0, 0, 0.25)",
      },
      maxWidth: {
        "8xl": "100rem",
      },
      colors: {
        primary: {
          300: "#FFFDF9",
          400: "#FFFAEE",
          500: "#F7EBD6",
          600: "#EEDEC3",
          800: "#AD9774",
        },
        accent: {
          400: "#B4162E",
          500: "#812F2F",
          700: "#610000",
        },
      },
    },
  },
  plugins: [],
};
export default config;
