import React from 'react'
import { ColorScheme, ColorSchemeProvider, MantineProvider as Provider } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import { ModalsProvider } from '@mantine/modals'
import { GlobalStyles, globalTheme } from '@/assets/theme'

export function MantineProvider({ children }) {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  })
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <Provider theme={{ ...globalTheme, colorScheme: colorScheme }} withNormalizeCSS>
        <GlobalStyles />
        <ModalsProvider>{children}</ModalsProvider>
      </Provider>
    </ColorSchemeProvider>
  )
}
