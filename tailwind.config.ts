import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        palette: {
          lighter: '#F5F3FF',
          light: '#DDD6FE',
          primary: '#7C3AED',
          dark: '#6D28D9',
        },
      },
      fontFamily: {
        primary: ['Poppins'],
        secondary: ['"Open Sans"'],
      },
    },
  },
  plugins: [],
};
export default config;
