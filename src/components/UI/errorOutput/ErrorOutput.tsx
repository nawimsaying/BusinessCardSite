// @ts-ignore
import React from 'react';
import '/src/index.css'
import styles from './ErrorOutput.module.css';

const ErrorOutput = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.oval}></div>

                <div className={styles.center_container}>
                    <div className={styles.flex}>
                        <img className={styles.gif} src='public\svg\error_emoji.gif'></img>
                        
                        <p className={styles.title}>Ошибка #404</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ErrorOutput;