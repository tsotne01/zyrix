import { StrictMode } from 'react'

import { ClerkProvider } from '@clerk/clerk-react'
import { dark } from '@clerk/themes'
import { createRoot } from 'react-dom/client'

import App from './App.tsx'
import './index.css'

// Import your Publishable Key
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk Publishable Key to the .env file')
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ClerkProvider
      appearance={{
        theme: dark,
      }}
      publishableKey={PUBLISHABLE_KEY}
    >
      <App />
    </ClerkProvider>
  </StrictMode>,
)
