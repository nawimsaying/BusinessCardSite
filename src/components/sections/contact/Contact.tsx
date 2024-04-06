import React, {useState} from 'react';
import {motion} from 'framer-motion';
import {UserFeedbackRepository} from "../../../architecture/feedBackUser/UserFeedbackRepository.ts";
import {UserFeedBackApiClient} from "../../../architecture/feedBackUser/UserFeedBackApiClient.ts";
import styles from './Contact.module.css';

const Contact: React.FC = () => {
    // @ts-ignore
    const [loading, setLoading] = useState(false);
    // @ts-ignore
    const [error, setError] = useState<string | null>(null);
    const [email, setEmail] = useState("");

    const sendEmail = async (email: string) => {
        try {
            setLoading(true);
            setError(null);
            const repository = new UserFeedbackRepository(new UserFeedBackApiClient());
            await repository.sendEmail(email);
            console.log("Email успешно отправлен");
        } catch (error: any) {
            console.error("Ошибка при отправке email:", error);
            if (error.message) {
                setError(error.message);
            } else {
                setError("Ошибка при отправке данных");
            }
        } finally {
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

    return (
        <div id="contact">
            <div className={styles.flex}>
                <div className={styles.container}>
                    <motion.section initial='hidden' whileInView='visible' viewport={{once: true}}>
                        <motion.p variants={nameAnimation} className={styles.section_name}>/ КОНТАКТЫ</motion.p>

                        <div className={styles.container_flex}>
                            <div className={styles.text_block}>
                                <motion.p variants={sectionAnimationFirst} className={styles.title}>СВЯЗАТЬСЯ<br/>С НАМИ</motion.p>
                                <motion.p variants={sectionAnimationSecond} className={styles.description}>Оставьте свой адрес электронной почты и мы Вам напишем!</motion.p>
                            </div>

                            <motion.div variants={sectionAnimationThird} className={styles.right_block}>
                                <div className={styles.desc_block}>
                                    <input
                                        placeholder='EMAIL АДРЕС'
                                        type='email'
                                        className={styles.desc_input}
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <button className={styles.desc_btn} onClick={handleSendEmail}>ОТПРАВИТЬ</button>
                                </div>
                                <div className={styles.bottom_block}>
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
        x: 100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {delay: 1.6, type: "spring", stiffness: 50}
    },
}

export default Contact;
