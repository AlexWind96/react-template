import { MantineThemeOverride } from '@mantine/core'
import { overrideColors } from './colors'

export const globalTheme: MantineThemeOverride = {
  //Setup global theme for util, components
  colors: overrideColors,
  primaryShade: { light: 6, dark: 7 },
  primaryColor: 'brand',
}
