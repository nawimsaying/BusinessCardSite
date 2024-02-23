import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import NotificationLine from './components/sections/notificationLine/NotificationLine.tsx'
import Contact from "./components/sections/contact/Contact.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <NotificationLine/>

        <Contact/>

        <App/>
    </React.StrictMode>
)
