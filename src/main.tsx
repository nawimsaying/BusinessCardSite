import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App.tsx'
import NotificationLine from './components/sections/notificationLine/NotificationLine.tsx'
import Contact from "./components/sections/contact/Contact.tsx";
import CustomerReviews from './components/sections/customerReviews/CustomerReviews.tsx'
import DevApproach from './components/sections/devApproach/DevApproach.tsx'
import Footer from './components/sections/footer/Footer.tsx'
import Header from './components/sections/header/Header.tsx'
import WhyUs from './components/sections/whyUs/WhyUs.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>

        <Header/>
        <WhyUs/>
        <DevApproach/>
        <CustomerReviews/>
        <Contact/>
        <Footer/>

    </React.StrictMode>
)
