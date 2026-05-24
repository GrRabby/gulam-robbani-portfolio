/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: '#070B14',
        bg2: '#0B1120',
        surface: '#0F1729',
        surface2: '#131B2E',
        border: '#1E2A44',
        borderLight: '#2A3656',
        muted: '#6B7A99',
        soft: '#94A3C2',
        fg: '#FFFFFF',
        accent: '#3B82F6',
        accent2: '#2563EB',
        accentLight: '#60A5FA',
        accentGlow: '#1D4ED8',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'blue-radial': 'radial-gradient(ellipse at top, rgba(59, 130, 246, 0.15), transparent 60%)',
        'card-gradient': 'linear-gradient(180deg, rgba(59,130,246,0.08) 0%, rgba(15,23,41,0) 100%)',
      },
      animation: {
        'pulse-slow': 'pulse 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
