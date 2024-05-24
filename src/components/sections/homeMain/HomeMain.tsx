import React, { useState, useEffect } from 'react';
import styles from './HomeMain.module.css';
import { motion } from 'framer-motion'

const HomeMain: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsVisible(true);
    }, 1500); // Пример задержки в 1 секунду

    return () => clearTimeout(timeoutId);
    }, []);

    return (
        <>
            <div className={styles.flex}>
                <div className={styles.container}>
                    <motion.p initial='hidden' whileInView='visible' variants={titleAnimation} className={styles.title} viewport={{once: true}}>VIRTSPACE</motion.p>
                </div>

                <div className={styles.desc_container}>
                    <motion.p initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
                        transition={{ duration: 0, type: "spring", stiffness: 25 }}
                        viewport={{once: true}}
                        className={styles.description}>
                            Создаем современные веб-приложения. От визитки до интернет-магазина.
                    </motion.p>
                </div>
            </div>
        </>
    );
};

const titleAnimation = {
    hidden: {
        y: 100,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.2, type: "spring", stiffness: 15 }
    },
}

export default HomeMain;