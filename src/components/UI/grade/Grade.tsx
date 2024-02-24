// @ts-ignore
import React from 'react';
import styles from "./Grade.module.css";
const Grade = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.reviews}>
                    <p className={styles.main_text}>15+</p>
                    <p className={styles.desc_text}>Выполненных заказов</p>
                </div>

                <div className={styles.stars}>
                    <p className={styles.main_text_grade}>5.0</p>

                    <img className={styles.image_grade} src='public\images\GradeFive.png'></img>

                    <p className={styles.desc_text_grade}>Оценка от клиентов</p>
                </div>
            </div>
        </>
    );
};

export default Grade;