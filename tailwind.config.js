module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#E2DDFF",
          200: "#E9E5FF",
          300: "#9089BD",
          500: "#6d62ff",
          600: "#4434A7",
          900: "#241966",
        },
      },
      keyframes: {
        'fade-in-down': {
            '0%': {
                opacity: '0',
                transform: 'translateY(-10px)'
            },
            '100%': {
                opacity: '1',
                transform: 'translateY(0)'
            },
        }
    },
    animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out'
    }
    },
  },
  plugins: [],
};
