// @ts-ignore
import React, {useEffect, useState} from 'react';
import styles from './App.module.css'
import {BrowserRouter as Router} from 'react-router-dom';
import AppRouter from "./components/router/AppRouter.tsx";

function App() {
    return (
        <>
            <Router>
                <div className={styles.crop}>
                    <AppRouter/>
                </div>
            </Router>
        </>
    );
}

export default App;
