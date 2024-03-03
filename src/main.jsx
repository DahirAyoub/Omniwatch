import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { LogsProvider } from './logsContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LogsProvider>
      <App />
    </LogsProvider>
  </React.StrictMode>,
)
