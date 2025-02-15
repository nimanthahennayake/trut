const defaultTheme = require('tailwindcss/defaultTheme');
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./projects/**/*.{html,ts}",
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontSize: {
        '5xs': '8px',
        '4xs': '9px',
        '3xs': '10px',
        '2xs': '11px',
        'tiny': '13px',
        'md': '15px'
      },
      fontFamily: {
        'sans': ['"Poppins"', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: 'var(--trut-background)',
        'on-background': 'var(--trut-on-background)',
        'inverse': 'var(--trut-inverse)',
        neutral: {
          DEFAULT: 'var(--trut-neutral)',
          0: 'var(--trut-neutral-0)',
          50: 'var(--trut-neutral-50)',
          100: 'var(--trut-neutral-100)',
          200: 'var(--trut-neutral-200)',
          300: 'var(--trut-neutral-300)',
          400: 'var(--trut-neutral-400)',
          450: 'var(--trut-neutral-450)',
          500: 'var(--trut-neutral-500)',
          600: 'var(--trut-neutral-600)',
          650: 'var(--trut-neutral-650)',
          700: 'var(--trut-neutral-700)',
          800: 'var(--trut-neutral-800)',
          900: 'var(--trut-neutral-900)',
          950: 'var(--trut-neutral-950)',
          1000: 'var(--trut-neutral-1000)',
        },
        'neutral-variant': {
          DEFAULT: 'var(--trut-neutral-variant)',
          0: 'var(--trut-neutral-variant-0)',
          50: 'var(--trut-neutral-variant-50)',
          100: 'var(--trut-neutral-variant-100)',
          200: 'var(--trut-neutral-variant-200)',
          300: 'var(--trut-neutral-variant-300)',
          400: 'var(--trut-neutral-variant-400)',
          450: 'var(--trut-neutral-variant-450)',
          500: 'var(--trut-neutral-variant-500)',
          600: 'var(--trut-neutral-variant-600)',
          650: 'var(--trut-neutral-variant-650)',
          700: 'var(--trut-neutral-variant-700)',
          800: 'var(--trut-neutral-variant-800)',
          900: 'var(--trut-neutral-variant-900)',
          950: 'var(--trut-neutral-variant-950)',
          1000: 'var(--trut-neutral-variant-1000)',
        },
        primary: {
          DEFAULT: 'var(--trut-primary)',
          0: 'var(--trut-primary-0)',
          50: 'var(--trut-primary-50)',
          100: 'var(--trut-primary-100)',
          200: 'var(--trut-primary-200)',
          300: 'var(--trut-primary-300)',
          400: 'var(--trut-primary-400)',
          450: 'var(--trut-primary-450)',
          500: 'var(--trut-primary-500)',
          600: 'var(--trut-primary-600)',
          650: 'var(--trut-primary-650)',
          700: 'var(--trut-primary-700)',
          800: 'var(--trut-primary-800)',
          900: 'var(--trut-primary-900)',
          950: 'var(--trut-primary-950)',
          1000: 'var(--trut-primary-1000)',
        },
        secondary: {
          DEFAULT: 'var(--trut-secondary)',
          0: 'var(--trut-secondary-0)',
          50: 'var(--trut-secondary-50)',
          100: 'var(--trut-secondary-100)',
          200: 'var(--trut-secondary-200)',
          300: 'var(--trut-secondary-300)',
          400: 'var(--trut-secondary-400)',
          450: 'var(--trut-secondary-450)',
          500: 'var(--trut-secondary-500)',
          600: 'var(--trut-secondary-600)',
          650: 'var(--trut-secondary-650)',
          700: 'var(--trut-secondary-700)',
          800: 'var(--trut-secondary-800)',
          900: 'var(--trut-secondary-900)',
          950: 'var(--trut-secondary-950)',
          1000: 'var(--trut-secondary-1000)',
        },
        tertiary: {
          DEFAULT: 'var(--trut-tertiary)',
          0: 'var(--trut-tertiary-0)',
          50: 'var(--trut-tertiary-50)',
          100: 'var(--trut-tertiary-100)',
          200: 'var(--trut-tertiary-200)',
          300: 'var(--trut-tertiary-300)',
          400: 'var(--trut-tertiary-400)',
          450: 'var(--trut-tertiary-450)',
          500: 'var(--trut-tertiary-500)',
          600: 'var(--trut-tertiary-600)',
          650: 'var(--trut-tertiary-650)',
          700: 'var(--trut-tertiary-700)',
          800: 'var(--trut-tertiary-800)',
          900: 'var(--trut-tertiary-900)',
          950: 'var(--trut-tertiary-950)',
          1000: 'var(--trut-tertiary-1000)',
        },
        error: {
          DEFAULT: 'var(--trut-error)',
          0: 'var(--trut-error-0)',
          50: 'var(--trut-error-50)',
          100: 'var(--trut-error-100)',
          200: 'var(--trut-error-200)',
          300: 'var(--trut-error-300)',
          400: 'var(--trut-error-400)',
          450: 'var(--trut-error-450)',
          500: 'var(--trut-error-500)',
          600: 'var(--trut-error-600)',
          650: 'var(--trut-error-650)',
          700: 'var(--trut-error-700)',
          800: 'var(--trut-error-800)',
          900: 'var(--trut-error-900)',
          950: 'var(--trut-error-950)',
          1000: 'var(--trut-error-1000)'
        },
        'on-primary': 'var(--trut-on-primary)',
        'primary-container': 'var(--trut-primary-container)',
        'on-primary-container': 'var(--trut-on-primary-container)',
        'primary-fixed': 'var(--trut-primary-fixed)',
        'primary-fixed-dim': 'var(--trut-primary-fixed-dim)',
        'on-primary-fixed': 'var(--trut-on-primary-fixed)',
        'on-primary-fixed-variant': 'var(--trut-on-primary-fixed-variant)',

        'on-secondary': 'var(--trut-on-secondary)',
        'secondary-container': 'var(--trut-secondary-container)',
        'on-secondary-container': 'var(--trut-on-secondary-container)',
        'secondary-fixed': 'var(--trut-secondary-fixed)',
        'secondary-fixed-dim': 'var(--trut-secondary-fixed-dim)',
        'on-secondary-fixed': 'var(--trut-on-secondary-fixed)',
        'on-secondary-fixed-variant': 'var(--trut-on-secondary-fixed-variant)',

        'on-tertiary': 'var(--trut-on-tertiary)',
        'tertiary-container': 'var(--trut-tertiary-container)',
        'on-tertiary-container': 'var(--trut-on-tertiary-container)',
        'tertiary-fixed': 'var(--trut-tertiary-fixed)',
        'tertiary-fixed-dim': 'var(--trut-tertiary-fixed-dim)',
        'on-tertiary-fixed': 'var(--trut-on-tertiary-fixed)',
        'on-tertiary-fixed-variant': 'var(--trut-on-tertiary-fixed-variant)',

        'on-error': 'var(--trut-on-error)',
        'error-container': 'var(--trut-error-container)',
        'on-error-container': 'var(--trut-on-error-container)',

        'surface': 'var(--trut-surface)',
        'surface-dim': 'var(--trut-surface-dim)',
        'surface-bright': 'var(--trut-surface-bright)',
        'surface-container-lowest': 'var(--trut-surface-container-lowest)',
        'surface-container-low': 'var(--trut-surface-container-low)',
        'surface-container': 'var(--trut-surface-container)',
        'surface-container-high': 'var(--trut-surface-container-high)',
        'surface-container-highest': 'var(--trut-surface-container-highest)',
        'on-surface': 'var(--trut-on-surface)',
        'on-surface-variant': 'var(--trut-on-surface-variant)',

        'outline': 'var(--trut-outline)',
        'outline-variant': 'var(--trut-outline-variant)',

        'inverse-surface': 'var(--trut-inverse-surface)',
        'inverse-on-surface': 'var(--trut-inverse-on-surface)',
        'inverse-primary': 'var(--trut-inverse-primary)',

        'scrim': 'var(--trut-scrim)',
        'shadow': 'var(--trut-shadow)',

        accent: 'var(--trut-accent)',
        warn: 'var(--trut-warn)',
        dark: '#303030'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ],
}

