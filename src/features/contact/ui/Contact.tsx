import React from 'react';
import { motion } from 'framer-motion';
import { useContact } from '../model/useContact';
import ContactForm from './ContactForm';
import ContactMessage from './ContactMessage';
import styles from './styleContact.module.css';

const Contact: React.FC = () => {
    const {
        loading,
        error,
        email,
        emailValidateSuccessfully,
        emailSentSuccessfully,
        emailSentError,
        setEmail,
        handleSendEmail,
    } = useContact();

    return (
        <div id="contact">
            <div className={styles.flex} style={location.pathname === '/contact' ? {
                height: '100vh',
                paddingBottom: '0px',
                paddingTop: '0px'
            } : {}}>
                <div className={styles.container}>
                    <motion.section initial='hidden' whileInView='visible' viewport={{once: true}}>
                        <motion.p variants={nameAnimation} className={styles.section_name}>/ КОНТАКТЫ</motion.p>
                        <div className={styles.container_flex}>
                            <div className={styles.text_block}>
                                <motion.p variants={sectionAnimationFirst} className={styles.title}>СВЯЗАТЬСЯ<br/>С НАМИ
                                </motion.p>
                                <motion.p variants={sectionAnimationSecond} className={styles.description}>
                                    Просто оставьте свой e-mail и мы сами Вам напишем. Или напишите нам на корпоративный
                                    адрес эл. почты.
                                </motion.p>
                            </div>
                            <motion.div variants={sectionAnimationThird} className={styles.right_block}>
                                <ContactForm
                                    email={email}
                                    setEmail={setEmail}
                                    handleSendEmail={handleSendEmail}
                                    loading={loading}
                                    emailSentSuccessfully={emailSentSuccessfully}
                                    emailSentError={emailSentError}
                                    emailValidateSuccessfully={emailValidateSuccessfully}
                                />
                                <ContactMessage
                                    message={error}
                                    emailSentError={emailSentError}
                                    emailValidateSuccessfully={emailValidateSuccessfully}
                                />
                            </motion.div>
                        </div>
                    </motion.section>
                </div>
            </div>
        </div>
    );
};

const nameAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { delay: 0.6, type: 'spring', stiffness: 50 },
    },
};

const sectionAnimationFirst = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { delay: 0.8, type: 'spring', stiffness: 50 },
    },
};

const sectionAnimationSecond = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { delay: 1.2, type: 'spring', stiffness: 50 },
    },
};

const sectionAnimationThird = {
    hidden: {
        x: -25,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { delay: 1.6, type: 'spring', stiffness: 50 },
    },
};

export default Contact;
