// @ts-ignore
import React from 'react';
import '/src/index.css'
import styles from './HomeMain.module.css';

import EmailHomeInput from "../../UI/emailHomeInput/EmailHomeInput.tsx";
import Grade from "../../UI/grade/Grade.tsx";

const HomeMain = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.oval}></div>

                <div className={styles.center_container}>
                    <div className={styles.main_block}>
                        <div className={styles.text_container_flex}>
                            <div className={styles.text_container}>
                                <p className={styles.title}>Разработаем<br/>сайт под ключ</p>
                                <h3 className={styles.des}>Создаем виртуальные пространства для Вашего успеха! От визитки до интернет-магазина – Ваш сайт, Ваша история, Ваш успех в онлайн-мире.</h3>
                                <button className={styles.button_feedback} onClick={handleButtonClick}>Связаться с нами</button>
                            </div>
                        </div>
                    </div>

                    <div className={styles.bottom_block}>
                        <div className={styles.email_review}>
                            <div className={styles.email_input}>
                                <EmailHomeInput/>

                                <h5 className={styles.description}>Это не подписка на рассылку.<br/>Мы используем почту только для связи.</h5>
                            </div>

                            <div className={styles.empty}></div>

                            <div className={styles.grade}>
                                <Grade/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

const handleButtonClick = () => {

};

export default HomeMain;