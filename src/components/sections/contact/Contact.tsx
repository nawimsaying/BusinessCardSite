// @ts-ignore
import {useState} from 'react'
import '/src/index.css'
import styles from './Contact.module.css'
import { motion } from 'framer-motion'

import EmailInput from '../../UI/emailInput/EmailInput.tsx'
import EmailCopy from '../../UI/emailCopy/EmailCopy.tsx'

const Contact = () => {
    return (
        <>
            <div id="contact">
                <div className={styles.flex}>
                    <div className={styles.container}>
                        <motion.section variants={sectionAnimation} initial='hidden' whileInView='visible' viewport={{ once: true }}>
                            <p className={styles.section_name}>/ КОНТАКТЫ</p>

                            <div className={styles.container_flex}>
                                <div className={styles.text_block}>
                                    <p className={styles.title}>СВЯЗАТЬСЯ<br/>С НАМИ</p>

                                    <p className={styles.description}>Оставьте свой адрес элестронной почты и мы сами Вам напишем!</p>
                                </div>

                                <div className={styles.right_block}>
                                    <div className={styles.desc_block}>
                                        <input placeholder='EMAIL АДРЕС' type='email' className={styles.desc_input}></input>

                                        <button className={styles.desc_btn}>ОТПРАВИТЬ</button>
                                    </div>

                                    <div className={styles.bottom_block}>
                                        <p className={styles.bottom_desc}>virtspaceweb@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </motion.section>
                    </div>
                </div>
            </div>
        </>
    )
}

const sectionAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { delay: 0.4, type: "spring", stiffness: 75 }
    },
}

export default Contact