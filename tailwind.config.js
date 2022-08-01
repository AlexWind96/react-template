// eslint-disable-next-line @typescript-eslint/no-var-requires

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    colors: ({ colors }) => ({
      grape: colors.fuchsia,
      //COLORS OF MANTINE
      gray: {
        50: '#F8F9FA',
        100: '#F1F3F5',
        200: '#E9ECEF',
        300: '#DEE2E6',
        400: '#CED4DA',
        500: '#ADB5BD',
        600: '#868E96',
        700: '#495057',
        800: '#343A40',
        900: '#212529',
      },
      dark: {
        50: '#C1C2C5',
        100: '#A6A7AB',
        200: '#909296',
        300: '#5C5F66',
        400: '#373A40',
        500: '#2C2E33',
        600: '#25262B',
        700: '#1A1B1E',
        800: '#141517',
        900: '#101113',
      },
    }),
    fontFamily: {
      sans: [
        '-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji',
      ],
      mono: [
        'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace',
      ],
    },
    screens: {
      xs: '576px',
      sm: '768px',
      md: '992px',
      lg: '1200px',
      xl: '1400px',
      '2xl': '1536px',
    },
    borderRadius: {
      none: '0px',
      xs: '2px',
      sm: '4px',
      DEFAULT: '2px',
      md: '8px',
      lg: '16px',
      xl: '32px',
      full: '9999px',
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
