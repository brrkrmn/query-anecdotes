import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query'
import { NotificationProvider } from './NotificationContext'
import App from './App'

const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')).render(
  <NotificationProvider>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </NotificationProvider>
)