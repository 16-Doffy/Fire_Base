import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { theme } from './constants.js'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <ThemeProvider theme={theme}> 
    <BrowserRouter> 
      <App />
    </BrowserRouter>
    </ThemeProvider>
  </StrictMode>
)
