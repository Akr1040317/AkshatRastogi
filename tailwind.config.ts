import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          0: 'var(--bg-0)',
          1: 'var(--bg-1)',
        },
        paper: 'var(--paper)',
        honey: 'var(--honey)',
        'honey-line': 'var(--honey-line)',
        panel: 'var(--panel)',
        'panel-2': 'var(--panel-2)',
        text: 'var(--text)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        amber: {
          DEFAULT: 'var(--amber)',
          deep: 'var(--amber-deep)',
          soft: 'var(--amber-soft)',
          ink: 'var(--amber-ink)',
        },
        blue: 'var(--blue)',
        purple: 'var(--purple)',
        pink: 'var(--pink)',
        orange: 'var(--orange)',
        sky: 'var(--sky)',
      },
      fontFamily: {
        sans: ['Hanken Grotesk', 'system-ui', 'sans-serif'],
        display: ['Baloo 2', 'Hanken Grotesk', 'system-ui', 'sans-serif'],
        mono: ['Space Grotesk', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        hive: '20px',
      },
      boxShadow: {
        hive: 'var(--shadow-sm)',
        'hive-lg': 'var(--shadow-md)',
        amber: '0 10px 24px -8px rgba(238, 130, 0, 0.55)',
      },
    },
  },
  plugins: [],
}
export default config
