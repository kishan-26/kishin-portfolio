/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        palette: {
          deep: '#6d2d8f',     // Deep Violet from palette
          purple: '#a73be2',   // Vivid Purple from palette
          pink: '#ff7edb',     // Neon / Vibrant Pink from palette
          light: '#ffeaf9',    // Soft Lavender Pink from palette
        },
        brand: {
          50: '#fff0f9',
          100: '#ffeaf9',      // Palette light
          200: '#ffc7ef',
          300: '#ffa1e4',
          400: '#ff7edb',      // Palette main pink
          500: '#f749c8',
          600: '#d91ea6',
          700: '#b70f86',
          800: '#96106e',
          900: '#7d125c',
          950: '#4c0234',
        },
        accent: {
          50: '#faf5ff',
          100: '#f3e8ff',
          200: '#e9d5ff',
          300: '#d8b4fe',
          400: '#c084fc',
          500: '#a73be2',      // Palette purple
          600: '#9333ea',
          700: '#6d2d8f',      // Palette deep violet
          800: '#581c87',
          900: '#3b0764',
          950: '#200138',
        },
        darkBg: '#07020d',      // Deep pitch black with subtle purple hue
        darkCard: '#0f061c',    // Dark card background
        darkCardHover: '#180a2d',
        darkBorder: '#291043',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { opacity: '0.4', filter: 'blur(20px)' },
          '100%': { opacity: '0.8', filter: 'blur(30px)' },
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
        mono: ['Fira Code', 'JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', 'monospace'],
      }
    },
  },
  plugins: [],
}
