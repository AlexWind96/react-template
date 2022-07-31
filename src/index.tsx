import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './assets/scss/index.scss'
import './i18n'
import * as serviceWorker from './serviceWorker.js'

const container = document.getElementById('root')

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = createRoot(container!)
root.render(<App />)

serviceWorker.unregister()
