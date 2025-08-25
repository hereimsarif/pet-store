import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'pastel-blue': '#8fc7e8',
        'pastel-blue-900': '#156194',
        'pastel-yellow': '#ffe291',
        'white': '#fff',
      },
      borderRadius: {
        '2xl': '1.25rem',
      },
      boxShadow: {
        'lg': '0 8px 24px 0 rgba(143,199,232,0.14), 0 1.5px 6px 0 rgba(0,0,0,0.07)',
        'xl': '0 16px 48px 0 rgba(143,199,232,0.20), 0 2px 8px 0 rgba(0,0,0,0.10)',
        '2xl': '0 24px 64px rgba(143,199,232,0.22), 0 3px 14px 0 rgba(0,0,0,0.13)',
      },
    },
  },
  plugins: [],
};

export default config;
