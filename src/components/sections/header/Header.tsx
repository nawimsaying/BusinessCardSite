// @ts-ignore
import React, {useEffect, useState} from 'react';
import styles from './Header.module.css'

function Header() {
    return (
        <>
            <div className={styles.flex}>
                <div className={styles.container}>
                    {/* <img className={styles.image} src='public\images\tample_logo.png'></img> */}
                    <p className={styles.logo_p}>VIRTSPACE</p>

                    {/* <button className={styles.mobile_icon}/> */}
                </div>
            </div>
        </>
    );
}

export default Header;
