import React from 'react';
import styles from './PortfolioList.module.css';
import { motion } from 'framer-motion';
import Portfolio from "noUsingFiles/ui/portfolio/Portfolio.tsx";
import {UserReviews} from "../../../architecture/userReviews/Models.ts";


const PortfolioList: React.FC = () => {
    const portfolioData: UserReviews[] = [
        { id: 0, customerImage: './images/customerImage.png', siteImage: './images/siteimg_1.png', customerName: 'Феликс', description: 'Разработали лендинг для барбершопа буквально за несколько дней. Получилось то, что я и хотел.' },
        { id: 1, customerImage: './images/customerImage.png', siteImage: './images/siteimg_2.png', customerName: '', description: '' },
        { id: 2, customerImage: './images/customerImage.png', siteImage: './images/siteimg_3.png', customerName: '', description: '' },
    ];

    return (
        <div>

            <div className={styles.flex}>

                <div className={styles.circle}></div>
                <div className={styles.container}>
                    <div className={styles.container_flex}>
                        <div className={styles.text_block}>
                            <motion.p initial='hidden' whileInView='visible' variants={titleFirstAnimation} viewport={{once: true}} className={styles.title_one}>НАШИ<br/>РАБОТЫ</motion.p>
                            <motion.p initial='hidden' whileInView='visible' variants={titleSecondAnimation} viewport={{once: true}} className={styles.title_two}>ОТЗЫВЫ<br/>КЛИЕНТОВ</motion.p>
                            <motion.div initial='hidden' whileInView='visible' variants={sectionAnimation} viewport={{once: true}} className={styles.description_flex}>
                                <img className={styles.arw} src="./svg/arw.svg" alt="arrow"/>
                                <p className={styles.description}>Каждый выполненный заказ помогает нам двигаться дальше. Мы стараемся получить фидбек от каждого заказчика, с которым работали, чтобы провести анализ наших недостатков и преймуществ. Это помогает нам становиться лучше!</p>
                            </motion.div>
                        </div>
                        <div className={styles.portfolio_container}>
                            <motion.div initial='hidden' whileInView='visible' variants={portfolioThirdAnimation} viewport={{once: true}} className={styles.portfolio_item_one}>
                                <Portfolio review={portfolioData[2]}/>
                            </motion.div>
                            <motion.div initial='hidden' whileInView='visible' variants={portfolioSecondAnimation} viewport={{once: true}} className={styles.portfolio_item_two}>
                                <Portfolio review={portfolioData[1]}/>
                            </motion.div>
                            <motion.div initial='hidden' whileInView='visible' variants={portfolioFirstAnimation} viewport={{once: true}} className={styles.portfolio_item_three}>
                                <Portfolio review={portfolioData[0]}/>
                            </motion.div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

const titleFirstAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { delay: 0.2, type: "spring", stiffness: 20 }
    },
}

const titleSecondAnimation = {
    hidden: {
        x: -100,
        opacity: 0,
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { delay: 0.8, type: "spring", stiffness: 20 }
    },
}

const sectionAnimation = {
    hidden: {
        y: -50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {delay: 1.2, type: "spring", stiffness: 50}
    },
}

const portfolioFirstAnimation = {
    hidden: {
        y: -50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {delay: 0.4, type: "spring", stiffness: 30}
    },
}

const portfolioSecondAnimation = {
    hidden: {
        y: -50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {delay: 0.75, type: "spring", stiffness: 30}
    },
}

const portfolioThirdAnimation = {
    hidden: {
        y: -50,
        opacity: 0,
    },
    visible: {
        y: 0,
        opacity: 1,
        transition: {delay: 1.0, type: "spring", stiffness: 30}
    },
}

export default PortfolioList;