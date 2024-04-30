// @ts-ignore
import React, {useEffect, useState} from 'react';
// @ts-ignore
import styles from './App.module.css'
import {BrowserRouter as Router} from 'react-router-dom';
import AppRouter from "./components/router/AppRouter.tsx";

function App() {
    return (
        <>
            <Router>
                    <AppRouter/>
            </Router>
        </>
    );
}

export default App;
