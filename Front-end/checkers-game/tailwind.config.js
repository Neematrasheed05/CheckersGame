module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        '128': '32rem', // for 32 * 0.25rem = 8rem
      },
      animation: {
        gradient_301: 'gradient_301 5s ease infinite',
        pulse_3011: 'pulse_3011 4s infinite',
        animStar: 'animStar 60s linear infinite',
        animStarRotate: 'animStarRotate 90s linear infinite',
      },
      keyframes: {
        gradient_301: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        pulse_3011: {
          '0%': { transform: 'scale(0.75)', boxShadow: '0 0 0 0 rgba(0, 0, 0, 0.7)' },
          '70%': { transform: 'scale(1)', boxShadow: '0 0 0 10px rgba(0, 0, 0, 0)' },
          '100%': { transform: 'scale(0.75)', boxShadow: '0 0 0 0 rgba(0, 0, 0, 0)' },
        },
        animStar: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-135rem)' },
        },
        animStarRotate: {
          '0%': { transform: 'rotate(360deg)' },
          '100%': { transform: 'rotate(0)' },
        },
      },
    },
  },
  plugins: [],
};
