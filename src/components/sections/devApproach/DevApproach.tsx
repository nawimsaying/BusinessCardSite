// @ts-ignore
import {useState} from 'react'
import '/src/index.css'
import styles from './DevApproach.module.css'

const DevApproach = () => {
    return (
        <>
            <div className={styles.background}>
                
                <div className={styles.flex_bg}>
                    <div className={styles.flex_bg_1}>
                        <img className={styles.left_bg_image} src='../../../../public/images/GridDevApproach.png'></img>
                    </div>

                    <div className={styles.flex_bg_2}>
                        <img className={styles.right_bg_image}
                            src='../../../../public/images/Grid2DevApproach.png'></img>
                    </div>
                </div>

                <div className={styles.center_container}>
                    <h1 className={styles.title}>
                        Подход к разработке
                    </h1>

                    <div className={styles.container}>
                        <div className={styles.center}>
                            <div className={styles.block_1_container}>
                                <div className={styles.block_1}>
                                    <div className={styles.flex}>
                                        <div className={styles.labels_1}>
                                            <h2>Проработка технического задания</h2>

                                            <h4 className={styles.description_1}>Техническое задание — документ, в котором
                                                зафиксированы требования к проекту. Он всегда предшествует созданию веб-сайта. С
                                                помощью ТЗ определяется, каким в итоге будет продукт, минимизируется количество
                                                ошибок и нейтрализуются разногласия. Когда разработка концепции сайта закончилась,
                                                работа переходит на следующий этап — дизайн.</h4>
                                        </div>

                                        <div className={styles.pictures_1}>
                                            <img className={styles.block_image} src='../../../../public/images/block_1.png'/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.block_2_container}>
                                <div className={styles.block_2}>
                                    <div className={styles.flex}>
                                        <div className={styles.labels_2}>
                                            <h2>Разработка дизайна</h2>

                                            <h4 className={styles.description_2}>Изначально разработка дизайна сайта начинается
                                                с прототипирования. Это схематическое расположение блоков. Прототипирование
                                                делается для того, чтобы заказчик увидел главные элементы страниц, структуру
                                                сайта. Если заказчика всё устраивает, разрабатывается полноценный дизайн.</h4>
                                        </div>

                                        <div className={styles.pictures_2}>
                                            <img className={styles.block_image_small}
                                                src='../../../../public/images/block_2.png'/>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.block_3}>
                                    <div className={styles.flex}>
                                        <div className={styles.labels_2}>
                                            <h2>Разработка сайта</h2>

                                            <h4 className={styles.description_2}>Процесс программирования — этап, связывающий
                                                воедино систему управления, дизайн и интерфейс сайта. Также «реализуется» логика
                                                портала, прописываются алгоритмы взаимодействия пользователя с сайтом и
                                                взаимосвязи страницы с внешними ресурсами.</h4>
                                        </div>

                                        <div className={styles.pictures_2}>
                                            <img className={styles.block_image_small}
                                                src='../../../../public/images/block_3.png'/>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className={styles.block_1_container}>
                                <div className={styles.block_4}>
                                    <div className={styles.flex}>
                                        <div className={styles.labels_1}>
                                            <h2>Загрузка сайта на хостинг</h2>

                                            <h4 className={styles.description_1}>При локализации своего сайта на хостинге сайт, а
                                                также вся содержащаяся на нём информация регулярно будут доступны для
                                                пользователей.</h4>
                                        </div>

                                        <div className={styles.pictures_1}>
                                            <img className={styles.block_image} src='../../../../public/images/block_4.png'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DevApproach