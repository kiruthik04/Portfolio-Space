/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // adjust if not using src/
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}", // for Next.js app dir
  ],
  theme: {
    extend: {
      fontFamily: {
        space: ["Space Grotesk", "sans-serif"], // your custom font
        body: ["Inter", "sans-serif"],          // fallback for body
      },
      colors: {
        "cosmic-purple": "#a855f7",
        "cosmic-blue": "#3b82f6",
        "cosmic-silver": "#9ca3af",
        "star-white": "#ffffff",
        "nebula-pink": "#ec4899",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      boxShadow: {
        cosmic: "0 0 20px rgba(168, 85, 247, 0.6)", // purple glow
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.3" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "twinkle-fast": "twinkle 1s infinite",
        "twinkle-slow": "twinkle 3s infinite",
      },
    },
  },
  plugins: [],
};
