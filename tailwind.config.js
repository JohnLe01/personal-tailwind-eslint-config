module.exports = {
  important: true,
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    boxShadow: {
      none: '0 0 #0000',
      'default-alt': '0px 4px 4px rgba(0, 0, 0, 0.25)',
      DEFAULT: '0px 4px 8px rgba(0, 0, 0, 0.25)',
      DEFAULT_WHITE: '0px 4px 8px rgba(255, 255, 255, 0.25)',
      'border-btm-inactive': 'inset 0 -2px 0 #525252',
      'border-btm-inactive-alt': 'inset 0 -2px 0 #e0e0e0',
      'border-ui-03': '0 0 0 1px #e0e0e0',
      'border-interactive-01': '0 0 0 2px #0f62fe',
      md: '0px 6px 25px rgba(0, 0, 0, 0.0403893), 0px 1.6472px 5.58408px rgba(0, 0, 0, 0.0596107), 0px 0.583807px 1.66253px rgba(0, 0, 0, 0.1)',
    },
    screens: {
      sm: '672px',
      md: '1056px',
      lg: '1312px',
      desktop: '1520px',
      xl: '1584px',
    },
    spacing: {
      0: '0',
      1: '0.125rem',
      2: '0.25rem',
      3: '0.5rem',
      3.5: '0.625rem',
      4: '0.75rem',
      4.5: '0.875rem',
      5: '1rem',
      5.5: '1.25rem',
      6: '1.5rem',
      6.5: '1.75rem',
      7: '2rem',
      7.5: '2.25rem',
      8: '2.5rem',
      8.5: '2.75rem',
      9: '3rem',
      9.5: '3.5rem',
      10: '4rem',
      10.5: '4.5rem',
      11: '5rem',
      12: '6rem',
      12.5: '7.8125rem',
      12.75: '9rem',
      13: '10rem',
      14: '11rem',
      15: '12rem',
      15.5: '12.5rem',
      16: '13rem',
    },
    extend: {
      animation: {
        'fade-in': 'fade-in 0.5s cubic-bezier(0.390, 0.575, 0.565, 1.000) both',
        'rotate-180-cw': 'rotate-180-cw 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'rotate-180-ccw': 'rotate-180-ccw 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'scale-in-center': 'scale-in-center 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'shake-horizontal': 'shake-horizontal 0.8s cubic-bezier(0.455, 0.030, 0.515, 0.955) both',
        'slide-in-left': 'slide-in-left 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both',
        'slide-out-right': 'slide-out-right 0.5s cubic-bezier(0.550, 0.085, 0.680, 0.530) both',
        wiggle: 'wiggle 0.5s ease-in-out 3',
        'wobble-hor-bottom': 'wobble-hor-bottom 0.8s ease both',
      },
      backgroundImage: (theme) => ({
        loading: 'url(../assets/images/bg/loading.png)',
        sandbox: 'url(../assets/images/bg/sandbox.svg)',
        local: 'url(../assets/images/bg/local.svg)',
        dev: 'url(../assets/images/bg/dev.svg)',
        beta: 'url(../assets/images/bg/beta.svg)',
      }),
      borderRadius: {
        '4xl': '2.25rem',
      },
      flex: {
        '1/2': '0 1 50%',
      },
      fontSize: {
        h1: ['2.5rem', { lineHeight: '3.5rem' }],
        h2: ['2.25rem', { lineHeight: '3.5rem' }],
        h3: ['2rem', { lineHeight: '3rem' }],
        h4: ['1.75rem', { lineHeight: '3rem' }],
        h5: ['1.5rem', { lineHeight: '2.5rem' }],
        h6: ['1.25rem', { lineHeight: '2rem' }],
        h7: ['1.17rem', { lineHeight: '2rem' }],
        l: ['1.125rem', { lineHeight: '1.75rem' }],
        m: ['1rem', { lineHeight: '1.5rem' }],
        s: ['0.875rem', { lineHeight: '1.25rem' }],
        xts: ['0.75rem', { lineHeight: '1.25rem' }],
        '2xts': ['0.625rem', { lineHeight: '0.75rem' }],
        '3xts': ['0.5625em', { lineHeight: '0.75rem' }],
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          to: {
            opacity: '1',
          },
        },
        'rotate-180-cw': {
          '0%': {
            transform: 'rotate(0)',
          },
          to: {
            transform: 'rotate(180deg)',
          },
        },
        'rotate-180-ccw': {
          '0%': {
            transform: 'rotate(0)',
          },
          to: {
            transform: 'rotate(-180deg)',
          },
        },
        'scale-in-center': {
          '0%': {
            transform: 'scale(0)',
            opacity: '1',
          },
          to: {
            transform: 'scale(1)',
            opacity: '1',
          },
        },
        'shake-horizontal': {
          '0%,to': {
            transform: 'translateX(0)',
          },
          '10%,30%,50%,70%': {
            transform: 'translateX(-10px)',
          },
          '20%,40%,60%': {
            transform: 'translateX(10px)',
          },
          '80%': {
            transform: 'translateX(8px)',
          },
          '90%': {
            transform: 'translateX(-8px)',
          },
        },
        'slide-in-left': {
          '0%': {
            transform: 'translateX(-1000px)',
            opacity: '0',
          },
          to: {
            transform: 'translateX(0)',
            opacity: '1',
          },
        },
        'slide-out-right': {
          '0%': {
            transform: 'translateX(0)',
            opacity: '1',
          },
          to: {
            transform: 'translateX(1000px)',
            opacity: '0',
          },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
      },
      fontFamily: {
        sans: [
          '"Inter"',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      colors: {
        sand: '#f9d9aa',
        brand: '#002fa6',
        primary: '#0353e9',
        success: '#198038',
        'success-02': '#24a148',
        'neutral-300': '#E5E5E5',
        'neutral-400': '#CCCCCC',
        warning: '#f1c21b',
        severe: '#ffa94e',
        error: '#da1e28',
        gray: {
          10: '#f4f4f4',
          30: '#c6c6c6',
          40: '#a8a8a8',
          45: '#868e96',
          50: '#8d8d8d',
          60: '#6f6f6f',
          70: '#525252',
          75: '#343A40',
          80: '#393939',
          90: '#262626',
          100: '#161616',
        },
        '04': '#ffffff',
        'interactive-01': '#0f62fe',
        'interactive-02': '#393939',
        'tag-purple': '#E8DAFF',
        'tag-green': '#9DD0D0',
        'hover-primary': '#0353e9',
        'hover-primary-text': '#0043CE',
        'support-03': '#f1c21b',
        'ui-03': '#e0e0e0',
        'ui-04': '#8d8d8d',
        'ui-05': '#161616',
        'notification-01': '#EDF5FF',
        'toggle-primary': '#0353E9BF',
      },
      minWidth: {
        mobile: '18.75rem',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['responsive', 'dark', 'group-hover', 'focus-within', 'hover', 'focus', 'first'],
      borderColor: ['first'],
      ringOpacity: ['hover', 'active', 'focus'],
    },
  },
  plugins: [],
};
