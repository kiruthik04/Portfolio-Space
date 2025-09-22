/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            colors: {
                'star-white': '#FFFFFF',
                'cosmic-blue': '#6EE7B7',
                'cosmic-silver': '#C0C0C0',
                'cosmic-purple': '#A78BFA',
                'card': 'rgba(255, 255, 255, 0.05)',
            },
            fontFamily: {
                space: ['"Space Mono"', 'monospace'],
                body: ['"Inter"', 'sans-serif'],
            },
            backgroundImage: {
                'gradient-cosmic': 'linear-gradient(90deg, #7f5af0, #0ea5e9, #14b8a6)',
                'gradient-space': 'radial-gradient(circle at center, rgba(255,255,255,0.1), transparent)',
            },
            keyframes: {
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(10px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                twinkle: {
                    '0%, 100%': { opacity: '0.2' },
                    '50%': { opacity: '1' },
                },
                'twinkle-fast': {
                    '0%, 100%': { opacity: '0.2' },
                    '50%': { opacity: '1' },
                },
                'pulse-glow': {
                    '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
                    '50%': { opacity: '1', transform: 'scale(1.2)' },
                },
            },
            animation: {
                'fade-in-up': 'fade-in-up 1s ease-out forwards',
                twinkle: 'twinkle 2s infinite',
                'twinkle-fast': 'twinkle-fast 1s infinite',
                'pulse-glow': 'pulse-glow 2s infinite',
            },
        },
    },
    plugins: [],
}
