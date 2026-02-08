/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4b2bee",
        "accent-cyan": "#00f2ff",
        "background-light": "#f6f6f8",
        "background-dark": "#0a0a0f",
        "surface-dark": "#161618",
        "card-dark": "#131022",
        "border-dark": "#292348",
        accent: {
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
        },
        slate: {
          50: '#F8FAFC',
          100: '#F1F5F9',
          200: '#E2E8F0',
          300: '#CBD5E1',
          400: '#94A3B8',
          500: '#64748B',
          600: '#475569',
          700: '#334155',
          800: '#1E293B',
          900: '#0F172A',
        },
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        sans: ["Space Grotesk", "sans-serif"]
      },
      animation: {
        'in': 'in 0.5s ease-out',
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-in-from-bottom-4': 'slideInFromBottom4 0.5s ease-out',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        in: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInFromBottom4: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
  darkMode: "class",
}
