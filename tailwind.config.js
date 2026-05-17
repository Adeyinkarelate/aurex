/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // HOMYCLEAN-style inverse surfaces
        footer: '#111827',
        navy: {
          DEFAULT: '#111827',
          mid: '#1f2937',
          light: '#374151',
        },
        /** Brand accent (solid CTAs, icons, highlights) ~ blue-600 */
        teal: {
          DEFAULT: '#2563eb',
          dark: '#1d4ed8',
          deeper: '#1e40af',
          pale: '#93c5fd',
          faint: '#eff6ff',
        },
        gold: {
          DEFAULT: '#f59e0b',
          light: '#fbbf24',
        },
        /** Mint accent (used outside hero where needed) */
        mint: {
          DEFAULT: '#48c7a8',
          dark: '#3ba893',
          deeper: '#2d8a72',
          light: '#7fe8ce',
          bright: '#b6f5e0',
        },
        /** Hero: one blue family for headline + primary CTA (lighter than page navy) */
        hero: {
          cta: '#3b82f6',
          'cta-hover': '#2563eb',
          line: {
            from: '#eff6ff',
            mid: '#93c5fd',
            to: '#60a5fa',
          },
        },
        cream: {
          DEFAULT: '#ffffff',
          warm: '#f9fafb',
        },
        text: {
          DEFAULT: '#111827',
          muted: '#4b5563',
        },
        border: {
          DEFAULT: '#e2e8f0',
          light: '#f1f5f9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['"Source Serif 4"', 'Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
      boxShadow: {
        card: '0 1px 2px rgba(15, 23, 42, 0.04), 0 12px 40px rgba(15, 23, 42, 0.06)',
        lift: '0 4px 6px rgba(15, 23, 42, 0.03), 0 24px 48px rgba(15, 23, 42, 0.09)',
        glow: '0 0 0 1px rgba(37, 99, 235, 0.18), 0 20px 50px rgba(37, 99, 235, 0.12)',
      },
      backgroundImage: {
        'mesh-light':
          'radial-gradient(at 0% 0%, rgba(37, 99, 235, 0.07) 0px, transparent 50%), radial-gradient(at 100% 0%, rgba(245, 158, 11, 0.05) 0px, transparent 45%), radial-gradient(at 100% 100%, rgba(17, 24, 39, 0.04) 0px, transparent 50%)',
        'mesh-dark':
          'radial-gradient(ellipse 80% 50% at 20% -10%, rgba(37, 99, 235, 0.22) 0%, transparent 55%), radial-gradient(ellipse 60% 40% at 90% 10%, rgba(245, 158, 11, 0.06) 0%, transparent 50%), radial-gradient(at 50% 100%, rgba(17, 24, 39, 0.92) 0%, transparent 50%)',
      },
      animation: {
        // `both` keeps the 0% keyframe during animation-delay (forwards-only flashes visible before delay)
        'fade-up': 'fadeUp 0.75s cubic-bezier(0.22, 1, 0.36, 1) both',
        'fade-in': 'fadeIn 0.8s ease-out both',
        'slide-up': 'slideUp 0.85s cubic-bezier(0.22, 1, 0.36, 1) both',
        shimmer: 'shimmer 8s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'shift-slow': 'shiftSlow 22s ease-in-out infinite',
        'reveal-soft': 'revealSoft 1s cubic-bezier(0.22, 1, 0.36, 1) both',
        'slide-in-right': 'slideInRight 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        'mint-shimmer': 'mintShimmer 5s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shiftSlow: {
          '0%, 100%': { backgroundPosition: '0% 30%' },
          '50%': { backgroundPosition: '100% 70%' },
        },
        revealSoft: {
          '0%': { opacity: '0', transform: 'translateY(18px) scale(0.99)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(28px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        mintShimmer: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}
