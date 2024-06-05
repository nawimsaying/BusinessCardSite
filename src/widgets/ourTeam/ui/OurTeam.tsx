import React from 'react';
import styles from './OurTeam.module.css';
import {motion} from 'framer-motion'
import {
    leftBlockAnimation,
    leftBlockDescAnimation,
    leftBlockSocialAnimation,
    leftBlockTextAnimation, nameAnimation
} from "widgets/ourTeam/lib/animations.ts";

const OurTeam: React.FC = () => {
    return (
        <>
            <div className={styles.flex}>
                <div className={styles.container}>
                    <motion.section initial='hidden' whileInView='visible' viewport={{once: true}}>
                        <motion.p variants={nameAnimation} className={styles.section_name}>/ КОМАНДА</motion.p>

                        <div className={styles.block}>
                            <motion.div variants={leftBlockAnimation} className={styles.block_photo}>
                                <img className={styles.picture} src='./images/img_N.webp'/>
                            </motion.div>

                            <div className={styles.text_block}>
                                <motion.div variants={leftBlockTextAnimation}>
                                    <p className={styles.name}>НИКИТА</p>

                                    <p className={styles.speciality}>BACKEND-РАЗРАБОТЧИК</p>
                                </motion.div>

                                <motion.div variants={leftBlockSocialAnimation}>
                                    <div className={styles.social_networks}>
                                        <a className={styles.links} href="https://vk.com/wilbur_whateley" target="_blank">
                                            <img className={styles.link_img} src='./images/vklogo.png'/>
                                        </a>

                                        <a href="https://t.me/T1XOH" target="_blank">
                                            <img className={styles.link_img} src='./images/tglogo.png'/>
                                        </a>
                                    </div>
                                </motion.div>

                                <motion.div variants={leftBlockDescAnimation}>
                                    <div className={styles.description_block}>
                                        <hr color='#FFF' className={styles.hr}></hr>
                                        <p className={styles.desc_text}>«В создании веб-сайтов важно не только понимать технологии, но и видеть их применение в решении реальных проблем пользователей.»</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.section>

                    <motion.section initial='hidden' whileInView='visible' viewport={{once: true}}>
                        <div className={styles.block_right}>
                            <motion.div variants={leftBlockAnimation} className={styles.block_photo_right}>
                                <img className={styles.picture} src='./images/img_M.webp'/>
                            </motion.div>

                            <div className={styles.text_block}>
                                <motion.div variants={leftBlockTextAnimation}>
                                    <p className={styles.name}>МАКСИМ</p>

                                    <p className={styles.speciality}>FRONTEND-РАЗРАБОТЧИК</p>
                                </motion.div>

                                <motion.div variants={leftBlockSocialAnimation}>
                                    <div className={styles.social_networks_right}>
                                        <a className={styles.links_right} href="https://vk.com/mnochevny"
                                        target="_blank">
                                            <img className={styles.link_img} src='./images/vklogo.png'/>
                                        </a>

                                        <a href="https://t.me/velp1k" target="_blank">
                                            <img className={styles.link_img} src='./images/tglogo.png'/>
                                        </a>
                                    </div>
                                </motion.div>

                                <motion.div variants={leftBlockDescAnimation}>
                                    <div className={styles.description_block}>
                                        <p className={styles.desc_text_right}>«Мы способны не только понимать технологии, но и видеть, как они могут изменить жизнь пользователей.»</p>
                                        <hr color='#FFF' className={styles.hr}></hr>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.section>

                    <motion.section initial='hidden' whileInView='visible' viewport={{once: true}}>
                        <div className={styles.block}>
                            <motion.div variants={leftBlockAnimation} className={styles.block_photo}>
                                <img className={styles.picture} src='./images/img_D.webp'/>
                            </motion.div>

                            <div className={styles.text_block}>
                                <motion.div variants={leftBlockTextAnimation}>
                                    <p className={styles.name}>ДАНИИЛ</p>

                                    <p className={styles.speciality}>ВЕБ-ДИЗАЙНЕР</p>
                                </motion.div>

                                <motion.div variants={leftBlockSocialAnimation}>
                                    <div className={styles.social_networks}>
                                        <a className={styles.links} href="https://vk.com/uknowimsaying" target="_blank">
                                            <img className={styles.link_img} src='./images/vklogo.png'/>
                                        </a>

                                        <a href="https://t.me/opopee" target="_blank">
                                            <img className={styles.link_img} src='./images/tglogo.png'/>
                                        </a>
                                    </div>
                                </motion.div>

                                <motion.div variants={leftBlockDescAnimation}>
                                    <div className={styles.description_block}>
                                        <hr color='#FFF' className={styles.hr}></hr>
                                        <p className={styles.desc_text}>«Современная веб-разработка требует современных решений. Эту концепцию наша команда пытается донести до остальных.»</p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </motion.section>
                </div>
            </div>
        </>
    )
}



export default OurTeam;