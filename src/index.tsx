import React from 'react'
import App from './App'
import * as serviceWorker from './serviceWorker.js'
import './i18n'
import './assets/scss/index.scss'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')

const root = createRoot(container!)
root.render(<App />)

serviceWorker.unregister()
