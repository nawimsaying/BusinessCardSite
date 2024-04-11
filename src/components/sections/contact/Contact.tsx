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
    const [description, setDescription] = useState("");

    const sendEmail = async (email: string) => {
        try {
            setLoading(true);
            setError(null);
            if (EmailValidator.validate(email)) {
                // const repository = new UserFeedbackRepository(new UserFeedBackApiClient());
                // await repository.sendEmail(email);
                await new Promise(resolve => setTimeout(resolve, 2000));
                setDescription('Email успешно отправлен!')
                console.log("Email успешно отправлен");
            }
            else {
                setDescription('Почта введена некорректно.')
                console.log("При вводе Email допущены ошибки");
            }
        } 
        catch (error: any) {
            console.error("Ошибка при отправке email: ", error);
            if (error.message) {
                setDescription(error.message)
                setError(error.message);
            } else {
                setDescription('Возникла ошибка при отправке Email.')
                setError("Ошибка при отправке данных");
            }
        } 
        finally {
            setLoading(false);
        }
    };

    const handleSendEmail = async () => {
        if (email.trim() === "") {
            setError("Поле не заполнено");
            console.error("Поле не заполнено");
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
                    <motion.section variants={sectionAnimation} initial='hidden' whileInView='visible'
                                    viewport={{once: true}}>
                        <p className={styles.section_name}>/ КОНТАКТЫ</p>
                        <div className={styles.container_flex}>
                            <div className={styles.text_block}>
                                <p className={styles.title}>СВЯЗАТЬСЯ<br/>С НАМИ</p>
                                <p className={styles.description}>Оставьте свой адрес элестронной почты и мы сами
                                    Вам напишем!</p>
                            </div>

                            <div className={styles.right_block}>
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
                                    <p className={styles.status}>
                                        {description}
                                    </p>
                                    <p className={styles.bottom_desc}>virtspaceweb@gmail.com</p>
                                </div>
                            </div>
                        </div>
                    </motion.section>
                </div>
            </div>
        </div>
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
<<<<<<< Updated upstream
        transition: {delay: 0.4, type: "spring", stiffness: 75}
=======
        transition: {delay: 0.4, type: "spring", stiffness: 50}
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
        transition: {delay: 0.6, type: "spring", stiffness: 50}
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
        transition: {delay: 1.0, type: "spring", stiffness: 50}
    },
}

const sectionAnimationThird = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {delay: 1.2, type: "spring", stiffness: 50}
>>>>>>> Stashed changes
    },
}

export default Contact;
