// @ts-ignore
import React, {useEffect, useState} from 'react';
import NavBar from "../../UI/navbar/NavBar.tsx";
import styles from './Header.module.css'

function Header() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.center_container}>
                        <NavBar/>
                </div>
            </div>
        </>
    );
}

export default Header;
