import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Info from "./components/sections/info/Info.tsx";
import Header from "./components/sections/header/Header.tsx";


ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>

        <Header/>
        <div style={{marginTop: '20px'}}></div>
        <Info/>

    </React.StrictMode>
)
