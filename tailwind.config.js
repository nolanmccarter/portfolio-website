/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,ts}',
  ],
  theme: {
    extend: {
      colors: {
        wood: {
          950: '#1C0F05',
          900: '#2E1A0A',
          800: '#3D2412',
          700: '#523018',
          600: '#6B4022',
          500: '#8A5530',
          400: '#A86C44',
          300: '#C48A60',
        },
        velvet: {
          900: '#150000',
          800: '#380000',
          700: '#550000',
          600: '#720000',
          500: '#8B0000',
          400: '#A01010',
          300: '#B52020',
        },
        gold: {
          900: '#7A5500',
          800: '#9B6B00',
          700: '#B8860B',
          600: '#C4902A',
          500: '#DAA520',
          400: '#E8C048',
          300: '#F0D068',
          200: '#F5E098',
        },
        cream: {
          DEFAULT: '#F0E6D3',
          100: '#FAF5ED',
          200: '#F0E6D3',
          300: '#E0D0B8',
          400: '#C8B898',
          500: '#B0A088',
          600: '#907860',
        },
        pewter: {
          950: '#161514',
          900: '#1E1D1C',
          800: '#252422',
          700: '#302F2D',
          600: '#3E3C3A',
          500: '#545250',
          400: '#706E6B',
          300: '#9A9896',
          200: '#C0BDBA',
          100: '#E2DED9',
        },
        chrome: '#C8C8C8',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
      },
      animation: {
        'lava-1': 'lava-float-1 14s ease-in-out infinite',
        'lava-2': 'lava-float-2 19s ease-in-out infinite',
        'lava-3': 'lava-float-3 11s ease-in-out infinite',
        'lava-4': 'lava-float-4 23s ease-in-out infinite',
        'glow':   'glow-pulse 4s ease-in-out infinite',
      },
      keyframes: {
        'lava-float-1': {
          '0%, 100%': { transform: 'translateY(0px) scale(1)',    borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%' },
          '25%':       { transform: 'translateY(-45px) scale(1.05)', borderRadius: '40% 60% 30% 70% / 60% 40% 60% 40%' },
          '50%':       { transform: 'translateY(-90px) scale(0.95)', borderRadius: '70% 30% 50% 50% / 40% 70% 30% 60%' },
          '75%':       { transform: 'translateY(-45px) scale(1.08)', borderRadius: '30% 70% 60% 40% / 70% 30% 70% 30%' },
        },
        'lava-float-2': {
          '0%, 100%': { transform: 'translateY(0px) scale(1.1)',   borderRadius: '40% 60% 50% 50% / 60% 40% 60% 40%' },
          '33%':      { transform: 'translateY(-65px) scale(0.9)', borderRadius: '60% 40% 40% 60% / 40% 60% 40% 60%' },
          '66%':      { transform: 'translateY(-30px) scale(1.15)', borderRadius: '50% 50% 70% 30% / 50% 50% 30% 70%' },
        },
        'lava-float-3': {
          '0%, 100%': { transform: 'translateY(0px) scale(0.9)',  borderRadius: '50% 50% 60% 40% / 40% 60% 40% 60%' },
          '40%':      { transform: 'translateY(-55px) scale(1)',  borderRadius: '40% 60% 30% 70% / 60% 40% 70% 30%' },
          '80%':      { transform: 'translateY(-25px) scale(1.1)', borderRadius: '70% 30% 60% 40% / 30% 70% 40% 60%' },
        },
        'lava-float-4': {
          '0%, 100%': { transform: 'translateY(0px) scale(1.2)',   borderRadius: '65% 35% 55% 45% / 45% 55% 45% 55%' },
          '50%':      { transform: 'translateY(-70px) scale(0.85)', borderRadius: '35% 65% 45% 55% / 55% 45% 55% 45%' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.35' },
          '50%':      { opacity: '0.65' },
        },
      },
    },
  },
  plugins: [],
}
