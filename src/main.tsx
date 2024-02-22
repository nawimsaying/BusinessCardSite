import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import CustomerReviews from "./components/sections/customerReviews/CustomerReviews.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/*<NotificationLine/>*/}

        {/*<Header/>*/}
        <CustomerReviews/>
        {/*<App/>*/}
    </React.StrictMode>
)
