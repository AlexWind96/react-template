import { ButtonStylesParams, MantineThemeOverride } from '@mantine/core'
import { overrideColors } from './colors'

export const globalTheme: MantineThemeOverride = {
  //Setup global theme for util, components
  //https://github.com/mantinedev/mantine/blob/master/src/mantine-styles/src/theme/default-theme.ts
  colors: overrideColors,
  primaryShade: { light: 6, dark: 7 },
  primaryColor: 'brand',
  components: {
    Button: {
      //OVERRIDE EXAMPLE
      // defaultProps: {
      //   size: 'xs',
      //   color: 'cyan',
      // },
      // styles: (theme, params: ButtonStylesParams) => ({
      //   root: {
      //     backgroundColor:
      //       params.variant === 'filled'
      //         ? theme.colors[params.color || theme.primaryColor][9]
      //         : undefined,
      //   },
      // }),
    },
  },
  datesLocale: 'en',
}
