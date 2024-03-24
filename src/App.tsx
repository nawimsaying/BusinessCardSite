// @ts-ignore
import React, {useEffect, useState} from 'react';
import classes from "./App.module.css";
import HomePage from './page/HomePage';
import PortfolioPage from './page/PortfolioPage';
import AboutUsPage from './page/AboutUsPage';
import ErrorPage from './page/ErrorPage';

import styles from './App.module.css'

function App() {
    return (
        <>
            <div className={styles.crop}>
                <HomePage/>
            </div>
        </>
    );
}

export default App;
