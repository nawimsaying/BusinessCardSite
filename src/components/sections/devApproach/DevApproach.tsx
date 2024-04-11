// @ts-ignore
import {useState} from 'react'
import '/src/index.css'
import styles from './DevApproach.module.css'
import { motion } from 'framer-motion'

const DevApproach = () => {
    return (
        <>
            <div className={styles.flex}>
                <div className={styles.background_gradient}></div>

                <div className={styles.container}>
                    <div className={styles.items_box}>
                        <motion.section variants={sectionAnimation} initial='hidden' whileInView='visible' viewport={{ once: true }}>
                            <hr color='#000'/>

                            <div className={styles.item}>
                                <p className={styles.item_title}>ТЕХНИЧЕСКОЕ<br/>ЗАДАНИЕ</p>

                                <p className={styles.item_desc}>Детальная проработка технического задания - первый и очень важный этап для упешной разработки любого продукта. Мы уделяем должное внимание обсуждениям ТЗ с нашими заказчиками, чтобы избежать всех недопониманий и четко сформулировать задачи.</p>
                            </div>
                        </motion.section>

                        <motion.section variants={sectionAnimation} initial='hidden' whileInView='visible' viewport={{ once: true }}>
                            <hr color='#000'/>

                            <div className={styles.item}>
                                <p className={styles.item_title}>ДИЗАЙН</p>

                                <p className={styles.item_desc}>Когда техническое задание составлено мы приступаем к разработке вариантов дизайна и виртуального взаимодействия пользователя с интерфейсом. В процессе данного этапа мы стараемся учесть все детали, которые могут лучше отразить бренд и цели ресурса.</p>
                            </div>
                        </motion.section>

                        <motion.section variants={sectionAnimation} initial='hidden' whileInView='visible' viewport={{ once: true }}>
                            <hr color='#000'/>

                            <div className={styles.item}>
                                <p className={styles.item_title}>РАЗРАБОТКА</p>

                                <p className={styles.item_desc}>Этот этап включает в себя Frontend и Backend-разработку. Мы переносим дизайн сайта из графического редактора в браузер, используя языки разметки HTML и CSS. После этого мы работаем над адаптивностью сайта и добавляем на него анимации. Параллельно с этим ведется разработка серверной части приложения.</p>
                            </div>
                        </motion.section>

                        <motion.section variants={sectionAnimation} initial='hidden' whileInView='visible' viewport={{ once: true }}>
                            <hr color='#000'/>

                            <div className={styles.item}>
                                <p className={styles.item_title}>ТЕСТИРОВАНИЕ</p>

                                <p className={styles.item_desc}>Проведение должного тестирования и отладки приложения является также неотъемлемой и важнейшей частью разработки веб-приложений. Здесь мы проверяем, как сайт будет вести себя на различных устройствах и устраняем различные недоработки.</p>
                            </div>
                        </motion.section>

                        <motion.section variants={sectionAnimation} initial='hidden' whileInView='visible' viewport={{ once: true }}>
                            <hr color='#000'/>

                            <div className={styles.item}>
                                <p className={styles.item_title}>РАЗВЕРТЫВАНИЕ</p>

                                <p className={styles.item_desc}>Этап развертывания является завершающим этапом разработки. Мы загружаем веб-приложение на сервер и настраиваем соединение с базой данных, а также следим за тем, чтобы сайт стабильно функционировал.</p>
                            </div>

                            <hr color='#000'/>
                        </motion.section>
                    </div>

                    <div className={styles.title_box}>
                        <motion.section variants={sectionRightAnimation} initial='hidden' whileInView='visible' viewport={{ once: true }}>
                            <p className={styles.title}>ПОДХОД К<br/>РАЗРАБОТКЕ</p>

                            <p className={styles.description}>В ходе разработки мы делимся промежуточными результатами с заказчиками в обязательном порядке. Это помогает повысить ценность продукта и сократить сроки разработки. </p>
                        </motion.section>
                    </div>
                </div>
            </div>

            <div className={styles.circle}></div>
        </>
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
<<<<<<< Updated upstream
        transition: { delay: 0.4, type: "spring", stiffness: 75 }
=======
        transition: { delay: 0.4, type: "spring", stiffness: 50 }
>>>>>>> Stashed changes
    },
}

const sectionRightAnimation = {
    hidden: {
        x: 100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
<<<<<<< Updated upstream
        transition: { delay: 0.4, type: "spring", stiffness: 75 }
=======
        transition: { delay: 0.4, type: "spring", stiffness: 50 }
>>>>>>> Stashed changes
    },
}

export default DevApproach