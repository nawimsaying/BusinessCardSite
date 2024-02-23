import { useState } from 'react'
import '/src/index.css'
import styles from './Footer.module.css'

import EmailInputFooter from '../UI/EmailInputFooter'

const Contact = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.links_block}>
                    <div className={styles.column}>
                        <p className={styles.title_links}>Главная</p>
                        <a href=''>Приветствие</a>
                        <a href=''>От идеи до результата</a>
                        <a href=''>Почему именно мы</a>
                        <a href=''>Отзывы клиентов</a>
                        <a href=''>Связь с нами</a>
                    </div>

                    <div className={styles.column}>
                        <p className={styles.title_links}>Работы</p>
                        <a href=''>Приветствие</a>
                        <a href=''>От идеи до результата</a>
                    </div>

                    <div className={styles.column}>
                        <p className={styles.title_links}>О нас</p>
                        <a href=''>Приветствие</a>
                        <a href=''>От идеи до результата</a>
                    </div>
                </div>

                <div className={styles.contact_block}>
                    <div className={styles.items}>
                        <h1>Мы вам напишем</h1>

                        <EmailInputFooter />

                        <p className={styles.contact_description}>Это не подписка на рассылку. Мы используем почту только для связи.</p>
                    </div>
                </div>
            </div>

            <div className={styles.description}>
                <hr color='#2F2F2F'/>
                <p className={styles.description_text}>Что-то про авторские права и так далее...</p>
            </div>
        </>
    )
}

export default Contact