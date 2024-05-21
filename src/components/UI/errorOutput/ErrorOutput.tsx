// @ts-ignore
import React from 'react';
import styles from './ErrorOutput.module.css';
import { NavLink } from 'react-router-dom';

const ErrorOutput = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.oval}></div>

                <div className={styles.center_container}>
                    <div className={styles.flex}>
                        <p className={styles.title}>404</p>
                        <p className={styles.desc}>Страница не найдена. Однако на <NavLink to="/" style={{textDecoration: 'none'}}>Главной</NavLink> точно что-то есть.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ErrorOutput;