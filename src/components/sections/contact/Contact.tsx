import {useState} from 'react'
import '/src/index.css'
import styles from './Contact.module.css'

import EmailInput from '../../UI/emailInput/EmailInput.tsx'
import EmailCopy from '../../UI/emailCopy/EmailCopy.tsx'

const Contact = () => {
    return (
        <>
            <div className={styles.background}>
                <h1 className={styles.title}>Связь с нами</h1>
                <h3 className={styles.description}>Просто оставьте свой e-mail, и мы приложим все усилия, чтобы Ваше
                    виртуальное пространство стало реальностью! Мы сами с Вами свяжемся.</h3>

                <EmailInput/>

                <h5 className={styles.signature}>Это не подписка на рассылку. Мы используем почту только для связи.</h5>

                <hr className={styles.line} color='#818181'></hr>
                <h3 className={styles.description}>Или напишите нам на почту.</h3>

                <EmailCopy/>
            </div>
        </>
    )
}

export default Contact