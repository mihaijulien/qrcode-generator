import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import SimpleQRCodeGenerator from './SimpleQRCodeGenerator'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SimpleQRCodeGenerator />
  </StrictMode>,
)
