/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        footer: '#060d1a',
        navy: {
          DEFAULT: '#0a1628',
          mid: '#112240',
          light: '#1c3456',
        },
        teal: {
          DEFAULT: '#2eb8a0',
          dark: '#1e9e89',
          deeper: '#157a6a',
          pale: '#d4f0eb',
          faint: '#eaf8f5',
        },
        gold: {
          DEFAULT: '#e2a84b',
          light: '#f5d898',
        },
        cream: {
          DEFAULT: '#f6f3ee',
        },
        text: {
          DEFAULT: '#0f1f36',
          muted: '#5d6b80',
        },
        border: {
          DEFAULT: '#e0dbd2',
          light: '#ece8e0',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['Fraunces', 'Georgia', 'serif'],
      },
      boxShadow: {
        card: '0 18px 45px rgba(10, 22, 40, 0.08)',
        lift: '0 24px 60px rgba(10, 22, 40, 0.12)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
