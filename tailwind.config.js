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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#fff",
        secondary: "#0B1215",
        heading: "#FFAe42",
        paraColour: "#8f8f8f"
      },
      backgroundColor: {
        primary: "#0B1215",
        secondary: "#FF4F00",
      },
    },
  },
  plugins: [],
};
