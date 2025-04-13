/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5865f2',
          dark: '#4752c4',
        },
        secondary: {
          DEFAULT: '#99aab5',
          dark: '#7d8991',
        },
        success: {
          DEFAULT: '#57f287',
          dark: '#45c66c',
        },
        danger: {
          DEFAULT: '#ed4245',
          dark: '#c1383a',
        },
        warning: {
          DEFAULT: '#fee75c',
          dark: '#dbc64c',
        },
        // Text colors
        text: {
          primary: 'var(--text-primary)',
          secondary: 'var(--text-secondary)',
          heading: 'var(--text-heading)',
        },
        // Background colors
        bg: {
          primary: 'var(--bg-primary)',
          secondary: 'var(--bg-secondary)',
          card: 'var(--bg-card)',
        },
        // Border colors
        border: 'var(--border)',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      boxShadow: {
        sm: 'var(--shadow-sm)',
        DEFAULT: 'var(--shadow)',
        md: 'var(--shadow-md)',
        lg: 'var(--shadow-lg)',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}