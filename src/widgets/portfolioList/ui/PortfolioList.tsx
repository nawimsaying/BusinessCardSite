import React from 'react';
import styles from './PortfolioList.module.css';
import { motion } from 'framer-motion';
import Portfolio from "noUsingFiles/ui/portfolio/Portfolio.tsx";
import {
    portfolioFirstAnimation,
    portfolioSecondAnimation,
    portfolioThirdAnimation,
    sectionAnimation,
    titleFirstAnimation,
    titleSecondAnimation
} from "widgets/portfolioList/lib/animations.ts";
import {portfolioData} from "widgets/portfolioList/model/portfolioData.ts";


const PortfolioList: React.FC = () => {


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



export default PortfolioList;