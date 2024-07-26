/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      blue: "#0271E3",
      white: "#FFFFFF",
      bcolor: "#F0F0F0",
      darkblue: "#116ECE",
      lightblue: "#0271E3",
      green: "#34DA26",
      notification: "#1F87F2",
      black: "#000000",
      surfaceblue: "#3E73D4",
    },
    extend: {
      fontFamily: {
        "sf-bold": ["SF Pro", "sans-serif"],
        "sf-regular": ["SF Pro regular", "sans-serif"],
        "sf-medium": ["SF Pro medium", "sans-serif"],
        "sf-rounded": ["SF Rounded", "sans-serif"],
      },
      keyframes: {
        scrollInfinite: {
          "0%": { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(100%)" },
        },
      },
      animation: {
        scrollInfinite:
          "scrollInfinite 1.8s cubic-bezier(0.77, 0, 0.175, 1) infinite both",
      },
      screens: {
        largerDesktop: { max: "1535px" },
        // => @media (max-width: 1535px) { ... }

        desktop: { max: "1279px" },
        // => @media (max-width: 1279px) { ... }

        tabletLandscape: { max: "1023px" },
        // => @media (max-width: 1023px) { ... }

        tabletMedium: { max: "910px" },
        // => @media (max-width: 900px) { ... }

        tabletPortrait: { max: "770px" },
        // => @media (max-width: 767px) { ... }

        phone: { max: "639px" },
        // => @media (max-width: 639px) { ... }

        midPhone: { max: "450px" },
        // => @media (max-width: 450px) { ... }

        smallPhone: { max: "390px" },
        //=> @media (max-width: 380px) { ... }

        smallestPhone: { max: "320px" },
        //=> @media (max-width: 320px) { ... }
      },
    },
  },
  plugins: [],
};
