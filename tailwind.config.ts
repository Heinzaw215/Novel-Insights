// tailwind.config.ts
import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography'; 

const config: Config = {
  content: ['./src/**/*.{ts,tsx,js,jsx}', './app/**/*.{ts,tsx,js,jsx}', './pages/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [typography],
};

export default config;
