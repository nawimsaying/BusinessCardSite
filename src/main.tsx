import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import Review from "./components/UI/feedback/Review.tsx";
import Header from "./components/sections/Header.tsx";
import App from "./App.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/*<NotificationLine/>*/}

        {/*<Header/>*/}
        <Review/>
        {/*<App/>*/}
    </React.StrictMode>
)
