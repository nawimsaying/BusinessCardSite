import React from 'react';
import styles from './Technologies.module.css';
import { motion } from 'framer-motion';
import {
    nameAnimation,
    sectionAnimationFirst,
    sectionAnimationSecond,
    sectionAnimationThird,
    sectionAnimationFourth
} from '../lib/animations';
import useTechnologies from '../model/useTechnologies';

const Technologies: React.FC = () => {
    const { text, activeButton, isChanging, handleButtonClick } = useTechnologies();

    return (
        <div className={styles.flex}>
            <div className={styles.container}>
                <motion.section initial="hidden" whileInView="visible" viewport={{ once: true }}>
                    <motion.p variants={nameAnimation} className={styles.section_name}>/ СТЕК</motion.p>

                    <div className={styles.container_flex}>
                        <div className={styles.text_block}>
                            <motion.p variants={sectionAnimationFirst} className={styles.title}>ТЕХНОЛОГИИ</motion.p>
                            <motion.p variants={sectionAnimationSecond} className={styles.description}>
                                Для разработки мы используем только современные и актуальные технологии, чтобы Ваше приложение прослужило дольше и легко обслуживалось.
                            </motion.p>
                        </div>

                        <div className={styles.right_block}>
                            <motion.div variants={sectionAnimationThird} className={styles.buttons_group}>
                                <button
                                    className={activeButton === 1 ? styles.active_btn : styles.unactive_btn}
                                    type="button"
                                    onClick={() => handleButtonClick(1)}
                                >
                                    FRONTEND
                                </button>
                                <button
                                    className={activeButton === 2 ? styles.active_btn : styles.unactive_btn}
                                    type="button"
                                    onClick={() => handleButtonClick(2)}
                                >
                                    BACKEND
                                </button>
                                <button
                                    className={activeButton === 3 ? styles.active_btn : styles.unactive_btn}
                                    type="button"
                                    onClick={() => handleButtonClick(3)}
                                >
                                    DEVOPS
                                </button>
                            </motion.div>

                            <motion.div variants={sectionAnimationFourth} className={styles.desc_block}>
                                <p id="text_p" className={isChanging ? styles.desc_text_out : styles.desc_text_in}>
                                    {text}
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </motion.section>
            </div>
        </div>
    );
};

export default Technologies;
