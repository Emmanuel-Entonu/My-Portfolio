import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './cv.css'
import CVPage from './CVPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CVPage />
  </StrictMode>,
)
