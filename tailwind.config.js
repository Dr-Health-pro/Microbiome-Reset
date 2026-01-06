/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': {
          50: '#E6F4F7',
          100: '#B3E0E8',
          200: '#80CCD9',
          300: '#4DB8CA',
          400: '#1AA4BB',
          500: '#0A5F6F',
          600: '#084D5A',
          700: '#063B45',
          800: '#042930',
          900: '#02171B',
        },
        'secondary': {
          50: '#FAF6EB',
          100: '#F4ECCE',
          200: '#EDE2B1',
          300: '#E7D894',
          400: '#E0CE77',
          500: '#C9A961',
          600: '#B08E4E',
          700: '#97733B',
          800: '#7E5828',
          900: '#653D15',
        },
        'accent': {
          50: '#E8F9FC',
          100: '#C5F0F7',
          200: '#A2E7F2',
          300: '#7FDEED',
          400: '#4DD4E8',
          500: '#2ABDD4',
          600: '#2199AE',
          700: '#187588',
          800: '#0F5162',
          900: '#062D3C',
        },
        'navy': {
          50: '#E7EDEF',
          100: '#BCC8CD',
          200: '#91A3AB',
          300: '#667E89',
          400: '#3B5967',
          500: '#0D2E3E',
          600: '#0A2632',
          700: '#081D26',
          800: '#05151A',
          900: '#030C0E',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-microbiome': 'linear-gradient(135deg, #0D2E3E 0%, #0A5F6F 50%, #1A7F8E 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}
