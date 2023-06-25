/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        hide: {
          from: { opacity: 1 },
          to: { opacity: 0 },
        },
        slideIn: {
          from: {
            transform: 'translateY(calc(100% + 8px))',
          },
          to: { transform: 'translateY(0)' },
        },
        swipeOut: {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(100% + 8px))' },
        },
      },
      animation: {
        hide: 'hide 100ms ease-in',
        slideIn: 'slideIn 150ms cubic-bezier(0.16, 1, 0.3, 1)',
        swipeOut: 'swipeOut 100ms ease-out',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
