import type { Config } from 'tailwindcss'
import animate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography';

const config: Config = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {fontFamily: {
      gochi: ['"Gochi Hand"', 'cursive'],
      sans: ['Inter', 'sans-serif'],
      serif: ['Playfair Display', 'serif'],
      nosifer: ['Nosifer', 'cursive'],
      display: ['Clash Display', 'sans-serif'], // if you're self-hosting
    },},
  },
  plugins: [animate,typography],
}

export default config
