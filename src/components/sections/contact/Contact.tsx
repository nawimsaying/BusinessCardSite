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
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                    <button className={styles.desc_btn} onClick={handleSendEmail}>ОТПРАВИТЬ</button>
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
        transition: {delay: 0.4, type: "spring", stiffness: 75}
    },
}

export default Contact;
