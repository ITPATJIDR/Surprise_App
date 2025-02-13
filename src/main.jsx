import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './assets/fonts/iannnnn-DOG/iannnnn-DOG-Bold.ttf'
import './assets/fonts/iannnnn-DOG/iannnnn-DOG-Light.ttf'
import './assets/fonts/iannnnn-DOG/iannnnn-DOG-Regular.ttf'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
  </StrictMode>,
)
