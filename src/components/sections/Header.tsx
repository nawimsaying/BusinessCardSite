// @ts-ignore
import React, {useEffect, useState} from 'react';
import NavBar from "../UI/header/NavBar.tsx";
import {BrowserRouter} from "react-router-dom";
import AppRouter from '../AppRouter.tsx';
import styles from './Header.module.css'

function Header() {
    return (
        <>
            <div className={styles.container}>
                <BrowserRouter>
                    <NavBar/>
                    <AppRouter/>
                </BrowserRouter>
            </div>
        </>
    );
}

export default Header;
