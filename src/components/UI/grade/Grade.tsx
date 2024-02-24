// @ts-ignore
import React from 'react';
import styles from "./Grade.module.css";
const Grade = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.reviews}>
                    <p>Отзывы</p>
                </div>
                <div className={styles.stars}>
                    <p>Оценка</p>
                </div>
         </div>
        </>
    );
};

export default Grade;