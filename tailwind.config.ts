import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class', // Enables dark mode using the 'class' strategy
  theme: {
    extend: {
      colors: {
        light: {
          background: '#FFFFFF',
          secondary: '#F8F9FA',
          text: '#212529',
          accent: '#4C6EF5',
          button: '#5A5DF7',
          buttonHover: '#364FC7',
        },
        dark: {
          background: '#121212',
          secondary: '#1F1F1F',
          text: '#E9ECEF',
          accent: '#A5D8FF',
          button: '#5A5DF7',
          buttonHover: '#364FC7',
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};
export default config;
