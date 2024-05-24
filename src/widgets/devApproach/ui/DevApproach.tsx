// @ts-ignore
import {useState} from 'react'
import styles from './DevApproach.module.css'
import { motion } from 'framer-motion'
import {
    sectionAnimation,
    sectionRightAnimation
} from '../lib/animations.ts'

const DevApproach = () => {
    return (
        <>
            <div className={styles.flex}>
                <div className={styles.container}>
                    <div className={styles.items_box}>
                        <motion.section variants={sectionAnimation} initial='hidden' whileInView='visible' viewport={{ once: true }}>
                            <hr color='#000'/>

                            <div className={styles.item}>
                                <p className={styles.item_title}>ТЕХНИЧЕСКОЕ<br/>ЗАДАНИЕ</p>

                                <p className={styles.item_desc}>Детальная проработка технического задания - первый и очень важный этап для упешной разработки любого продукта. Мы уделяем должное внимание обсуждениям ТЗ с нашими заказчиками, чтобы избежать недопониманий, четко сформулировать задачи и определить финальный вид проекта.</p>
                            </div>
                        </motion.section>

                        <motion.section variants={sectionAnimation} initial='hidden' whileInView='visible' viewport={{ once: true }}>
                            <hr color='#000'/>

                            <div className={styles.item}>
                                <p className={styles.item_title}>ДИЗАЙН</p>

                                <p className={styles.item_desc}>Когда техническое задание согласовано, мы приступаем к разработке вариантов дизайна и виртуального взаимодействия пользователя с интерфейсом. В процессе данного этапа мы стараемся учесть все детали, которые помогут лучше отразить бренд и цели ресурса.</p>
                            </div>
                        </motion.section>

                        <motion.section variants={sectionAnimation} initial='hidden' whileInView='visible' viewport={{ once: true }}>
                            <hr color='#000'/>

                            <div className={styles.item}>
                                <p className={styles.item_title}>РАЗРАБОТКА</p>

                                <p className={styles.item_desc}>Этот этап включает в себя Frontend и Backend-разработку. Мы переносим разработанный дизайн из графического редактора в браузер, работаем над адаптивностью сайта и добавляем на него анимации. Параллельно с этим ведется разработка серверной части приложения.</p>
                            </div>
                        </motion.section>

                        <motion.section variants={sectionAnimation} initial='hidden' whileInView='visible' viewport={{ once: true }}>
                            <hr color='#000'/>

                            <div className={styles.item}>
                                <p className={styles.item_title}>ТЕСТИРОВАНИЕ</p>

                                <p className={styles.item_desc}>Проведение должного тестирования и отладки приложения является также неотъемлемой и важнейшей частью разработки веб-приложений. Здесь мы проверяем то, как сайт будет вести себя на различных устройствах и устраняем различные недоработки.</p>
                            </div>
                        </motion.section>

                        <motion.section variants={sectionAnimation} initial='hidden' whileInView='visible' viewport={{ once: true }}>
                            <hr color='#000'/>

                            <div className={styles.item}>
                                <p className={styles.item_title}>РАЗВЕРТЫВАНИЕ</p>

                                <p className={styles.item_desc}>Этап развертывания является завершающим этапом разработки. Мы загружаем веб-приложение на сервер и настраиваем соединение с базой данных, а также обеспечиваем стабильное функционирование сайта.</p>
                            </div>

                            <hr color='#000'/>
                        </motion.section>
                    </div>

                    <div className={styles.title_box}>
                        <motion.section variants={sectionRightAnimation} initial='hidden' whileInView='visible' viewport={{ once: true }}>
                            <p className={styles.title}>ПОДХОД К<br/>РАЗРАБОТКЕ</p>

                            <p className={styles.description}>В ходе разработки мы в обязательном порядке делимся промежуточными результатами с заказчиками. Это помогает повысить ценность продукта и сократить сроки разработки. </p>
                        </motion.section>
                    </div>
                </div>
            </div>

            {/* <div className={styles.circle}></div> */}
        </>
    )
}



export default DevApproach