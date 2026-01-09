/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Warm cream background like original
                cream: {
                    50: '#FFFDF8',
                    100: '#FFF9F0',
                    200: '#FFF5E6',
                    300: '#FFEDD5',
                },
                // Orange-red accent like original
                brand: {
                    50: '#FFF5F0',
                    100: '#FFE8DD',
                    200: '#FFD0BB',
                    300: '#FFB088',
                    400: '#FF8C55',
                    500: '#FF5C28', // Primary brand orange
                    600: '#FF4500', // Original site color
                    700: '#CC3700',
                    800: '#992A00',
                    900: '#661C00',
                },
                // Flavor colors from original
                peach: {
                    bg: '#FFF5E1',
                    text: '#FF6B4A',
                },
                lemon: {
                    bg: '#FFFDE8',
                    text: '#7CB342',
                },
                butterscotch: {
                    bg: '#FFF0D9',
                    text: '#A67B4B',
                },
                watermelon: {
                    bg: '#E8FFF5',
                    text: '#FF6B6B',
                },
            },
            fontFamily: {
                display: ['"Days One"', 'sans-serif'],
                body: ['"Sora"', 'sans-serif'],
            },
            animation: {
                'float': 'float 6s ease-in-out infinite',
                'float-slow': 'float 8s ease-in-out infinite',
                'spin-slow': 'spin 20s linear infinite',
                'wiggle': 'wiggle 3s ease-in-out infinite',
                'slide': 'slide 30s linear infinite',
                'bounce-slow': 'bounce 3s ease-in-out infinite',
            },
            keyframes: {
                float: {
                    '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
                    '50%': { transform: 'translateY(-20px) rotate(2deg)' },
                },
                wiggle: {
                    '0%, 100%': { transform: 'rotate(-3deg)' },
                    '50%': { transform: 'rotate(3deg)' },
                },
                slide: {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' },
                },
            },
            borderRadius: {
                '4xl': '2rem',
                '5xl': '2.5rem',
            },
        },
    },
    plugins: [],
}
