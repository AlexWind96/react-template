import React from 'react'
import { ErrorBoundary } from 'react-error-boundary'
import { QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { ColorScheme, ColorSchemeProvider, MantineProvider } from '@mantine/core'
import { useLocalStorage } from '@mantine/hooks'
import configureStore from '@/store/store'
import { globalTheme } from '@/assets/theme'
import { ErrorFallback } from '@/components/elements'
import { queryClient } from '@/lib/react-query'
import { AppRoutes } from '@/routes'
import './lib/axios'

const { store, persistor } = configureStore()

function App() {
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
                <Router>
                  <AppRoutes />
                </Router>
              </PersistGate>
            </Provider>
          </QueryClientProvider>
        </MantineProvider>
      </ColorSchemeProvider>
    </ErrorBoundary>
  )
}

export default App
