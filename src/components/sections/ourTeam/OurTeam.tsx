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

                                <div className={styles.description_block}>
                                    <hr color='#FFF' className={styles.hr}></hr>
                                    <p className={styles.desc_text}>VirtSpace - молодая студия веб-разработки,
                                        занимающаяся созданием современных сайтов - от визитки до интернет-магазина.</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.section>

                    <motion.section initial='hidden' whileInView='visible' viewport={{once: true}}>
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

                                <div className={styles.description_block}>
                                    <p className={styles.desc_text_right}>VirtSpace - молодая студия веб-разработки,
                                        занимающаяся созданием современных сайтов - от визитки до интернет-магазина.</p>
                                    <hr color='#FFF' className={styles.hr}></hr>
                                </div>
                            </div>
                        </motion.div>
                    </motion.section>

                    <motion.section initial='hidden' whileInView='visible' viewport={{once: true}}>
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

const leftBlockAnimation = {
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

const rightBlockAnimation = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: {delay: 0.4, type: "spring", stiffness: 75}
    },
}

export default OurTeam;