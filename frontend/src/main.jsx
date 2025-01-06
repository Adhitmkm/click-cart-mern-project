import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { UpdateprofileProvider } from './components/context/Updateuserprofile/Updateprofile.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UpdateprofileProvider>
    <App  />
    </UpdateprofileProvider>

  </StrictMode>,
)
