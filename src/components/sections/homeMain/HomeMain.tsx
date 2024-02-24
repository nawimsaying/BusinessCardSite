// @ts-ignore
import React from 'react';
import  styles from './HomeMain.module.css';

import EmailHomeInput from "../../UI/emailHomeInput/EmailHomeInput.tsx";
import Grade from "../../UI/grade/Grade.tsx";
// @ts-ignore
const handleButtonClick = () => {

};
const HomeMain = () => {
    return (
        <>
            <div className={styles.container}>

                <div className={styles.oval}></div>
                <div className={styles.textContainer}>
                    <h1>Разработаем <br/> сайт под ключ</h1>
                    <p className={styles.des}>Создаем виртуальные пространства для Вашего успеха!<br/>
                        От визитки до интернет-магазина – Ваш сайт, Ваша история,<br/>
                        Ваш успех в онлайн-мире.</p>
                    <button className={styles.button_feedback} onClick={handleButtonClick}>Связаться с нами</button>
                </div>
                <div className={styles.email_review}>
                    <div className={styles.email_input}>
                        <EmailHomeInput/>
                        <p>Это не подписка на рассылку.<br/>
                            Мы используем почту только для связи.
                        </p>
                    </div>
                    <div className={styles.grade}>
                        <Grade/>
                    </div>
                </div>

            </div>

        </>
    );
};

export default HomeMain;