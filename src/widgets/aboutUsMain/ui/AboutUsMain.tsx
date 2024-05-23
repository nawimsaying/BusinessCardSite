import React from 'react';
import {motion} from 'framer-motion'
import styles from './AboutUsMain.module.css';
import {scrollToContact} from '../lib/scroll.ts'
import {
    nameAnimation,
    titleAnimation,
    bottomBlockAnimationFirst,
    bottomBlockAnimationSecond,
    bottomBlockAnimationThird
} from '../lib/animations';

const AboutUsMain: React.FC = () => {
    return (
        <>
            <div className={styles.flex}>
                <div className={styles.container}>
                    <motion.section initial='hidden' whileInView='visible' viewport={{once: true}}>
                        <motion.p variants={nameAnimation} className={styles.section_name}>/ О НАС</motion.p>

                        <motion.p variants={titleAnimation} className={styles.text}>ПЕРСПЕКТИВНАЯ КОМАНДА ОПЫТНЫХ
                            РАЗРАБОТЧИКОВ ОБЯЗАТЕЛЬНО ПОМОЖЕТ СОЗДАТЬ <span
                                className={styles.text_color_first}>УНИКАЛЬНЫЙ,</span> <span
                                className={styles.text_color_second}>СОВРЕМЕННЫЙ</span> И <span
                                className={styles.text_color_third}>БЫСТРЫЙ</span> САЙТ ПОД ЛЮБЫЕ ЦЕЛИ.
                        </motion.p>
                    </motion.section>

                    <motion.section initial='hidden' whileInView='visible' viewport={{once: true}}>
                        <div className={styles.bottom_flex}>
                            <motion.div variants={bottomBlockAnimationFirst}>
                                <img className={styles.arw} src='./svg/arw.svg'></img>
                            </motion.div>

                            <div className={styles.block_first}>
                                <motion.div variants={bottomBlockAnimationSecond}>
                                    <p className={styles.description}>VirtSpace - молодая студия веб-разработки,
                                        занимающаяся созданием современных сайтов. Наша небольшая, но перспективная
                                        команда всегда готова поработать над Вашим проектом!</p>

                                    <button className={styles.btn_about_us} onClick={scrollToContact}
                                            type='button'>Написать нам
                                    </button>
                                </motion.div>
                            </div>

                            <div className={styles.block_second}>
                                <motion.div variants={bottomBlockAnimationThird}>
                                    <p className={styles.description}>Мы горим идеей создавать новые и современные сайты,
                                        которые будут актуальны еще долгие годы и недороги в процессе содержания.</p>
                                </motion.div>
                            </div>
                        </div>

                        <button className={styles.btn_about_us_mobile} onClick={scrollToContact}
                                type='button'>Написать нам
                        </button>
                    </motion.section>
                </div>
            </div>
        </>
    )
}





export default AboutUsMain;