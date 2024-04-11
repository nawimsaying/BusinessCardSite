import React from 'react';
import '/src/index.css'
import styles from './OurTeam.module.css';
import {motion} from 'framer-motion'

const OurTeam: React.FC = () => {
    return (
        <>
            <div className={styles.flex}>
                <div className={styles.container}>
                    <motion.section initial='hidden' whileInView='visible' viewport={{once: true}}>
                        <motion.p variants={leftBlockAnimation} className={styles.section_name}>/ КОМАНДА</motion.p>

<<<<<<< Updated upstream
                        <motion.div variants={leftBlockAnimation} className={styles.block}>
                            <div className={styles.block_photo}>
                                <img className={styles.picture} src='public\images\testimg2.png'/>
                            </div>

                            <div className={styles.text_block}>
                                <p className={styles.name}>ДАНИИЛ</p>

                                <p className={styles.speciality}>ДИЗАЙНЕР</p>

                                <div className={styles.social_networks}>
                                    <a className={styles.links} href="https://vk.com/uknowimsaying" target="_blank">
                                        <img className={styles.link_img} src='public\images\vklogo.png'/>
                                    </a>

                                    <a href="https://t.me/opopee" target="_blank">
                                        <img className={styles.link_img} src='public\images\tglogo.png'/>
                                    </a>
                                </div>
=======
                        <div className={styles.block}>
                            <motion.div variants={leftBlockAnimation} className={styles.block_photo}>
                                <img className={styles.picture} src='public\images\IMG_1938.png'/>
                            </motion.div>

                            <div className={styles.text_block}>
                                <motion.div variants={leftBlockTextAnimation}>
                                    <p className={styles.name}>НИКИТА</p>

                                    <p className={styles.speciality}>BACKEND-РАЗРАБОТЧИК</p>
                                </motion.div>

                                <motion.div variants={leftBlockSocialAnimation}>
                                    <div className={styles.social_networks}>
                                        <a className={styles.links} href="https://vk.com/wilbur_whateley" target="_blank">
                                            <img className={styles.link_img} src='public\images\vklogo.png'/>
                                        </a>

                                        <a href="https://t.me/T1XOH" target="_blank">
                                            <img className={styles.link_img} src='public\images\tglogo.png'/>
                                        </a>
                                    </div>
                                </motion.div>
>>>>>>> Stashed changes

                                <div className={styles.description_block}>
                                    <hr color='#FFF' className={styles.hr}></hr>
                                    <p className={styles.desc_text}>VirtSpace - молодая студия веб-разработки,
                                        занимающаяся созданием современных сайтов - от визитки до интернет-магазина.</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.section>

                    <motion.section initial='hidden' whileInView='visible' viewport={{once: true}}>
<<<<<<< Updated upstream
                        <motion.div variants={rightBlockAnimation} className={styles.block_right}>
                            <div className={styles.block_photo_right}>
                                <img className={styles.picture} src='public\images\testimg2.png'/>
                            </div>

                            <div className={styles.text_block}>
                                <p className={styles.name}>ДАНИИЛ</p>

                                <p className={styles.speciality}>ДИЗАЙНЕР</p>

                                <div className={styles.social_networks_right}>
                                    <a className={styles.links_right} href="https://vk.com/uknowimsaying"
                                       target="_blank">
                                        <img className={styles.link_img} src='public\images\vklogo.png'/>
                                    </a>

                                    <a href="https://t.me/opopee" target="_blank">
                                        <img className={styles.link_img} src='public\images\tglogo.png'/>
                                    </a>
                                </div>
=======
                        <div className={styles.block_right}>
                            <motion.div variants={rightBlockAnimation} className={styles.block_photo_right}>
                                <img className={styles.picture} src='public\images\IMG_1939.png'/>
                            </motion.div>

                            <div className={styles.text_block}>
                                <motion.div variants={rightBlockTextAnimation}>
                                    <p className={styles.name}>МАКСИМ</p>

                                    <p className={styles.speciality}>FRONTEND-РАЗРАБОТЧИК</p>
                                </motion.div>

                                <motion.div variants={rightBlockSocialAnimation}>
                                    <div className={styles.social_networks_right}>
                                        <a className={styles.links_right} href="https://vk.com/mnochevny"
                                        target="_blank">
                                            <img className={styles.link_img} src='public\images\vklogo.png'/>
                                        </a>

                                        <a href="https://t.me/velp1k" target="_blank">
                                            <img className={styles.link_img} src='public\images\tglogo.png'/>
                                        </a>
                                    </div>
                                </motion.div>
>>>>>>> Stashed changes

                                <div className={styles.description_block}>
                                    <p className={styles.desc_text_right}>VirtSpace - молодая студия веб-разработки,
                                        занимающаяся созданием современных сайтов - от визитки до интернет-магазина.</p>
                                    <hr color='#FFF' className={styles.hr}></hr>
                                </div>
                            </div>
                        </motion.div>
                    </motion.section>

                    <motion.section initial='hidden' whileInView='visible' viewport={{once: true}}>
<<<<<<< Updated upstream
                        <motion.div variants={leftBlockAnimation} className={styles.block}>
                            <div className={styles.block_photo}>
                                <img className={styles.picture} src='public\images\testimg2.png'/>
                            </div>
=======
                        <div className={styles.block}>
                            <motion.div variants={leftBlockAnimation} className={styles.block_photo}>
                                <img className={styles.picture} src='public\images\IMG_1937.png'/>
                            </motion.div>
>>>>>>> Stashed changes

                            <div className={styles.text_block}>
                                <p className={styles.name}>ДАНИИЛ</p>

                                <p className={styles.speciality}>ДИЗАЙНЕР</p>

                                <div className={styles.social_networks}>
                                    <a className={styles.links} href="https://vk.com/uknowimsaying" target="_blank">
                                        <img className={styles.link_img} src='public\images\vklogo.png'/>
                                    </a>

                                    <a href="https://t.me/opopee" target="_blank">
                                        <img className={styles.link_img} src='public\images\tglogo.png'/>
                                    </a>
                                </div>

                                <div className={styles.description_block}>
                                    <hr color='#FFF' className={styles.hr}></hr>
                                    <p className={styles.desc_text}>VirtSpace - молодая студия веб-разработки,
                                        занимающаяся созданием современных сайтов - от визитки до интернет-магазина.</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.section>
                </div>
            </div>
        </>
    )
}

<<<<<<< Updated upstream
=======
const nameAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {delay: 0.4, type: "spring", stiffness: 50}
    },
}

>>>>>>> Stashed changes
const leftBlockAnimation = {
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
        transition: {delay: 0.6, type: "spring", stiffness: 50}
    },
}

const leftBlockTextAnimation = {
    hidden: {
        x: -25,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {delay: 1.0, type: "spring", stiffness: 50}
    },
}

const leftBlockSocialAnimation = {
    hidden: {
        x: -25,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {delay: 1.3, type: "spring", stiffness: 50}
    },
}

const leftBlockDescAnimation = {
    hidden: {
        x: -25,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {delay: 1.6, type: "spring", stiffness: 50}
>>>>>>> Stashed changes
    },
}

const rightBlockAnimation = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
<<<<<<< Updated upstream
        transition: {delay: 0.4, type: "spring", stiffness: 75}
=======
        transition: {delay: 0.6, type: "spring", stiffness: 50}
    },
}

const rightBlockTextAnimation = {
    hidden: {
        x: 25,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {delay: 1.0, type: "spring", stiffness: 50}
    },
}

const rightBlockSocialAnimation = {
    hidden: {
        x: 25,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {delay: 1.3, type: "spring", stiffness: 50}
    },
}

const rightBlockDescAnimation = {
    hidden: {
        x: 25,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {delay: 1.6, type: "spring", stiffness: 50}
>>>>>>> Stashed changes
    },
}

export default OurTeam;