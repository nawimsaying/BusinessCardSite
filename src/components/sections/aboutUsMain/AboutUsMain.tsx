import React from 'react';
import { motion } from 'framer-motion'
import '/src/index.css'
import styles from './AboutUsMain.module.css';
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

const AboutUsMain = () => {
    return (
        <>
            <div className={styles.flex}>
                <div className={styles.container}>
                    <motion.section initial='hidden' whileInView='visible' viewport={{ once: true }}>
                        <motion.p variants={titleAnimation} className={styles.section_name}>/ О НАС</motion.p>

                        <motion.p variants={titleAnimation} className={styles.text}>ПЕРСПЕКТИВНАЯ КОМАНДА МОЛОДЫХ РАЗРАБОТЧИКОВ ОБЯЗАТЕЛЬНО ПОМОЖЕТ СОЗДАТЬ <span className={styles.text_color_first}>УНИКАЛЬНЫЙ,</span> <span className={styles.text_color_second}>СОВРЕМЕННЫЙ</span> И <span className={styles.text_color_third}>БЫСТРЫЙ</span> САЙТ ДЛЯ ВАШЕГО ПРОСТРАНСТВА.</motion.p>
                    </motion.section>

                    <motion.section initial='hidden' whileInView='visible' viewport={{ once: true }}>
                        <motion.div variants={bottomBlockAnimation}>
                            <div className={styles.bottom_flex}>
                                <img className= {styles.arw} src='public\svg\arw.svg'></img>

                                <div className={styles.block_first}>
                                    <p className={styles.description}>VirtSpace - молодая студия веб-разработки, занимающаяся созданием современных сайтов. Наша небольшая, но перспективная команда всегда готова поработать над Вашим проектом!</p>
                                    
                                    <button className={styles.btn_about_us} onClick={scrollToContact} type='button'>Написать нам</button>
                                </div>

                                <div className={styles.block_second}>
                                    <p className={styles.description}>Мы горим идеей создавать новые современные сайты, которые будут актуальны еще долгие годы и недороги в процессе содержания.</p>
                                </div>
                            </div>

                            <button className={styles.btn_about_us_mobile} onClick={scrollToContact} type='button'>Написать нам</button>
                        </motion.div>
                    </motion.section>
                </div>
            </div>
        </>
    )
}

const scrollToContact = () => {
    const target = document.querySelector("#contact");
    if (target) {
        const offset = target.getBoundingClientRect().top + window.pageYOffset;
        scroll.scrollTo(offset, {
            duration: 800,
            smooth: "easeInOutQuart"
        });
    }
};

const titleAnimation = {
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

const bottomBlockAnimation = {
    hidden: {
        y: -50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: { delay: 0.4, type: "spring", stiffness: 75 }
    },
}

export default AboutUsMain;