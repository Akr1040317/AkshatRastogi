import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          0: '#05060a',
          1: '#070814',
        },
        panel: 'rgba(255,255,255,0.06)',
        'panel-2': 'rgba(255,255,255,0.09)',
        text: 'rgba(255,255,255,0.92)',
        muted: 'rgba(255,255,255,0.68)',
        blue: '#4cc9ff',
        purple: '#8b5cf6',
        pink: '#ff4fd8',
        orange: '#ff8a3d',
      },
    },
  },
  plugins: [],
}
export default config


