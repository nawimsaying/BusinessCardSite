import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App.tsx'
import NotificationLine from './components/sections/notificationLine/NotificationLine.tsx'
import Contact from "./components/sections/contact/Contact.tsx";
import CustomerReviewsForPortfolio from "./components/sections/customerReviewsForPortfolio/CustomerReviewsForPortfolio.tsx";
import Info from "./components/sections/info/Info.tsx";
import CustomerReviewsForMain from "./components/sections/customerReviewsForMain/CustomerReviewsForMain.tsx";
import HomeMain from './components/sections/homeMain/HomeMain.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>
)
