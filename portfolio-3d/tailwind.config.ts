import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#0A0A0A',
        'dark-secondary': '#1A1A2E',
        'dark-tertiary': '#2A2A3E',
        'dark-navy': '#0F0F1E',
        accent: '#FF6A00',
        'accent-blue': '#0066FF',
        'accent-green': '#00FF88',
        'accent-purple': '#BB00FF',
        'accent-coral': '#FF3366',
      },
      fontFamily: {
        satoshi: ['var(--font-satoshi)', 'sans-serif'],
        'dm-sans': ['var(--font-dm-sans)', 'sans-serif'],
      },
      spacing: {
        '8px': '8px',
        '12px': '12px',
        '16px': '16px',
        '24px': '24px',
        '32px': '32px',
        '48px': '48px',
        '64px': '64px',
      },
      boxShadow: {
        glow: '0 0 20px rgba(255, 106, 0, 0.5)',
        'glow-lg': '0 0 40px rgba(255, 106, 0, 0.4)',
        'glow-intense': '0 0 60px rgba(255, 106, 0, 0.6)',
        depth: '0 20px 60px rgba(0, 0, 0, 0.8)',
        soft: '0 4px 12px rgba(0, 0, 0, 0.3)',
      },
      animation: {
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
      },
      keyframes: {
        'pulse-glow': {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
    },
  },
  plugins: [],
}
export default config
