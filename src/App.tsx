import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { ErrorBoundary, MantineProvider, QueryProvider, StoreProvider } from '@/providers'
import { AppRoutes } from '@/routes'

function App() {
  return (
    <ErrorBoundary>
      <StoreProvider>
        <MantineProvider>
          <QueryProvider>
            <Router>
              <AppRoutes />
            </Router>
          </QueryProvider>
        </MantineProvider>
      </StoreProvider>
    </ErrorBoundary>
  )
}

export default App
