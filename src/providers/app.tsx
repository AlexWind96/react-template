import React from 'react'
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter as Router } from 'react-router-dom'
import configureStore from '@/store/store'
import { Provider } from 'react-redux'
import { globalTheme } from '@/assets/theme'
import { PersistGate } from 'redux-persist/integration/react'
import { QueryClient, QueryClientProvider } from 'react-query'
import '../lib/axios'
import { ErrorFallback } from '@/components/elements'
import { useLocalStorage } from '@mantine/hooks'

const { store, persistor } = configureStore()

const queryClient = new QueryClient()

type AppProviderProps = {
  children: React.ReactNode
}

export const AppProvider = ({ children }: AppProviderProps) => {
  const [colorScheme, setColorScheme] = useLocalStorage<ColorScheme>({
    key: 'mantine-color-scheme',
    defaultValue: 'light',
    getInitialValueInEffect: true,
  })
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
        <MantineProvider
          theme={{ ...globalTheme, colorScheme: colorScheme }}
          withGlobalStyles
          withNormalizeCSS
        >
          <QueryClientProvider client={queryClient}>
            <Provider store={store}>
              <PersistGate loading={null} persistor={persistor}>
                <Router>{children}</Router>
              </PersistGate>
            </Provider>
          </QueryClientProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </ErrorBoundary>
  )
}