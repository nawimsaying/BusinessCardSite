import { useState } from 'react'
import '/src/index.css'
import styles from './WhyUs.module.css'

const WhyUs = () => {
    return (
        <>
            <div className={styles.background}>
                <h1 className={styles.title}>
                    Почему именно мы?
                </h1>

                <div className={styles.container}>
                    <div className={styles.block}>
                        <div className={styles.img_block}>
                            <img className={styles.blockimg} src='public/images/whyus_1.png'></img>
                        </div>

                        <div className={styles.block_container}>
                            <h4 className={styles.block_title}>Команда</h4>
                        </div>
                    </div>

                    <div className={styles.block}>

                    </div>

                    <div className={styles.block}>

                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyUs