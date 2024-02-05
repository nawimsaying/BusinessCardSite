import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App.tsx'
import NotificationLine from './components/sections/NotificationLine.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NotificationLine />
  </React.StrictMode>,
)
