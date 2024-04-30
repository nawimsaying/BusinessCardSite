import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { UserFeedbackRepository } from "../../../architecture/feedBackUser/UserFeedbackRepository.ts";
import { UserFeedBackApiClient } from "../../../architecture/feedBackUser/UserFeedBackApiClient.ts";
import styles from './Contact.module.css';
import { BeatLoader } from 'react-spinners';
import * as EmailValidator from 'email-validator';

const Contact: React.FC = () => {
    // @ts-ignore
    const [loading, setLoading] = useState(false);
    // @ts-ignore
    const [error, setError] = useState<string | null>(null);
    const [email, setEmail] = useState("");

    const sendEmail = async (email: string) => {
        try {
            setLoading(true);
            if (EmailValidator.validate(email)) {
                const repository = new UserFeedbackRepository(new UserFeedBackApiClient());
                await repository.sendEmail(email);
                // await new Promise(resolve => setTimeout(resolve, 2000));
                setError('Email успешно отправлен!')
            }
            else {
                setError('Почта введена некорректно.')
            }
        } 
        catch (error: any) {
            console.error("Ошибка при отправке email: ", error);
            if (error.message) {
                setError('Письмо на эту почту уже отправлено.')
            } else {
                setError('Возникла ошибка при отправке Email.')
            }
        } 
        finally {
            setLoading(false);
        }
    };

    const handleSendEmail = async () => {
        if (email.trim() === "") {
            setError("Поле пустое. Введите адрес эл. почты.");
            console.error("Поле пустое. Введите адрес эл. почты.");
            return;
        }
        await sendEmail(email);
    };

    const handleKeyPress = (event: any) => {
        if (event.key === 'Enter') {
            handleSendEmail()
        }
    };

    return (
        <div id="contact">
            <div className={styles.flex}>
                <div className={styles.container}>
                    <motion.section initial='hidden' whileInView='visible' viewport={{once: true}}>
                        <motion.p variants={nameAnimation} className={styles.section_name}>/ КОНТАКТЫ</motion.p>

                        <div className={styles.container_flex}>
                            <div className={styles.text_block}>
                                <motion.p variants={sectionAnimationFirst} className={styles.title}>СВЯЗАТЬСЯ<br/>С НАМИ</motion.p>
                                <motion.p variants={sectionAnimationSecond} className={styles.description}>Просто оставьте свой e-mail и мы сами Вам напишем. Или напишите нам на корпоративный адрес эл. почты.</motion.p>
                            </div>

                            <motion.div variants={sectionAnimationThird} className={styles.right_block}>
                                <div className={styles.desc_block}>
                                    <input
                                        placeholder='EMAIL АДРЕС'
                                        type='email'
                                        className={styles.desc_input}
                                        value={email}
                                        onKeyDown={handleKeyPress}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <button className={styles.desc_btn} onClick={handleSendEmail} disabled={loading}>
                                        {loading ? <BeatLoader color='#FFF' style={{width: '100', height: '100', transition: '100ms'}}/> : 'ОТПРАВИТЬ'}
                                    </button>
                                </div>
                                <div className={styles.bottom_block}>
                                    <p className={styles.bottom_message}>{error}</p>
                                    <p className={styles.bottom_desc}>virtspaceweb@gmail.com</p>
                                </div>
                            </motion.div>
                        </div>
                    </motion.section>
                </div>
            </div>
        </div>
    )
}

const nameAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {delay: 0.6, type: "spring", stiffness: 50}
    },
}

const sectionAnimationFirst = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {delay: 0.8, type: "spring", stiffness: 50}
    },
}

const sectionAnimationSecond = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {delay: 1.2, type: "spring", stiffness: 50}
    },
}

const sectionAnimationThird = {
    hidden: {
        x: 25,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {delay: 1.6, type: "spring", stiffness: 50}
    },
}

export default Contact;
