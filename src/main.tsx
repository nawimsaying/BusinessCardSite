import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import App from './App.tsx'
import NotificationLine from './components/sections/NotificationLine.tsx'
import NavBar from './components/UI/header/NavBar.tsx'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter.tsx";
import Header from './components/sections/Header.tsx'
import DevApproach from './components/sections/DevApproach.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <DevApproach/>

        <App/>
    </React.StrictMode>
)
