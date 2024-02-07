import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'


import Feedback from "./components/UI/feedback/Feedback.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        {/*<NotificationLine/>*/}

        <Feedback/>
        {/* <Header/>

        <App/>*/}
    </React.StrictMode>
)
