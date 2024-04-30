// @ts-ignore
import {useState} from 'react'
import '/src/index.css'
import styles from './WhyUs.module.css'

const WhyUs = () => {
    return (
        <>
            <div className={styles.info_screen}>
                <div className={styles.center_container}>
                    <div className={styles.info_text}>
                        <h1>Почему именно мы?</h1>
                    </div>

                    <div className={styles.container}>
                        <div className={styles.info_block}>
                            <div className={styles.info_block_item}>
                                <img className={styles.image} src='/public/images/whyus_1.png' alt='4'></img>
                                <h2>Команда</h2>
                                <h4 className={styles.block_small_text}>Молодая команда опытных разработчиков, знающих свое
                                    дело, обязательно поможет достичь желаемого результата.</h4>
                            </div>
                        </div>

                        <div className={styles.info_block}>
                            <div className={styles.info_block_item}>
                                <img className={styles.image} src='/public/images/whyus_2.png' alt='4'></img>
                                <h2>Выгода</h2>
                                <h4 className={styles.block_small_text}>Конкурентноспособные предложения с приятными
                                    ценниками и адекватными сроками разработки.</h4>
                            </div>
                        </div>

                        <div className={styles.info_block}>
                            <div className={styles.info_block_item}>
                                <img className={styles.image} src='/public/images/whyus_3.png' alt='4'></img>
                                <h2>Гарантия</h2>
                                <h4 className={styles.block_small_text}>Бесплатные правки и доработка до 100%
                                    результата.</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyUs