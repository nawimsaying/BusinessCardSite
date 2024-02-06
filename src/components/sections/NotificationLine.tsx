import { useState } from 'react'
import styles from './NotificationLine.module.css'

const NotificationLine = () => {
    return (
        <>
            <div className={styles.frame}>
                <div className={styles.image_container_left}>
                    <img src='public/images/GridNotificationLine.png'></img>
                </div>

                <div className={styles.image_container_right}>
                    <img src='public/images/Grid2NotificationLine.png'></img>
                </div>

                <div className={styles.text_container}>
                    <p className={styles.text}>
                        Создаем виртуальные пространства для вашего успеха!
                    </p>
                </div>
            </div>
        </>
    )
}

export default NotificationLine