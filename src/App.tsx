// @ts-ignore
import React, {useEffect, useState} from 'react';

import HomePage from './page/HomePage';


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
