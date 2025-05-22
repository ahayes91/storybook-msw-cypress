import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { AppWithQueryClient } from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppWithQueryClient />
    </QueryClientProvider>
  </StrictMode>,
)
