import React from 'react';
import '/src/index.css'
import styles from './PortfolioMain.module.css';

const PortfolioMain: React.FC = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.oval}></div>

                <div className={styles.center_container}>
                    <div className={styles.main_block}>
                        <div className={styles.text_container_flex}>
                            <div className={styles.text_container}>
                                <p className={styles.title}>Наши работы</p>
                                <button className={styles.button_feedback} onClick={handleButtonClick}>Подробнее
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const handleButtonClick = () => {

};

export default PortfolioMain;