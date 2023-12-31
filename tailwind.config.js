/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      baloo: 'var(--font-baloo)'
    },
    spacing: {
      'none': 'var(--spacing-none) /* 0px */',
      '4xs': 'var(--spacing-4xs) /* 8px */',
      '2xs': 'var(--spacing-2xs) /* 12px */',
      'xs': 'var(--spacing-xs) /* 16px */',
      'sm': 'var(--spacing-sm) /* 20px */',
      'md': 'var(--spacing-md) /* 24px */',
      'lg': 'var(--spacing-lg) /* 32px */',
      'xl': 'var(--spacing-xl) /* 40px */',
      '2xl': 'var(--spacing-2xl) /* 48px */',
      '4xl': 'var(--spacing-4xl) /* 56px */',
      0: 'var(--spacing-none) /* 0px */',
      1: 'var(--spacing-4xs) /* 8px */',
      2: 'var(--spacing-2xs) /* 12px */',
      3: 'var(--spacing-xs) /* 16px */',
      4: 'var(--spacing-sm) /* 20px */',
      5: 'var(--spacing-md) /* 24px */',
      6: 'var(--spacing-lg) /* 32px */',
      7: 'var(--spacing-xl) /* 40px */',
      8: 'var(--spacing-2xl) /* 48px */',
      9: 'var(--spacing-4xl) /* 56px */',
    },
    fontSize: {
      xs: 'var(--text-xs) /* 12px */',
      sm: 'var(--text-sm) /* 14px */',
      md: 'var(--text-md) /* 16px */',
      lg: 'var(--text-lg) /* 18px */',
      xl: 'var(--text-xl) /* 20px */',
      '2xl': 'var(--text-2xl) /* 24px */',
      '3xl': 'var(--text-3xl) /* 32px */',
      '4xl': 'var(--text-4xl) /* 48px */'
    },
    extend: {
      colors: {
        'light-yellow': 'var(--light-yellow)',
        'middle-yellow': 'var(--middle-yellow)',
        'dark-yellow': 'var(--dark-yellow)',
        'light-purple': 'var(--light-purple)',
        'middle-purple': 'var(--middle-purple)',
        'dark-purple': 'var(--dark-purple)',
        'light-brown': 'var(--light-brown)',
        'brown': 'var(--brown)',
        'middle-brown': 'var(--middle-brown)',
        'dark-brown': 'var(--dark-brown)',
        'light-gray': 'var(--light-gray)',
        'gray': 'var(--gray)',
        'middle-gray': 'var(--middle-gray)',
        'dark-gray': 'var(--dark-gray)',
        'light-white': 'var(--light-white)',
        'dark-white': 'var(--dark-white)',
      },
      fontFamily: {
        baloo: ['Baloo\\ 2', 'cursive'],
        roboto: ['Roboto', 'sans-serif'],
      },
      lineHeight: {
        'line-sm': 'var(--line-sm) /* 130% */',
        'line-md': 'var(--line-md) /* 160% */'
      },
      
    },
  },
  plugins: [],
}

