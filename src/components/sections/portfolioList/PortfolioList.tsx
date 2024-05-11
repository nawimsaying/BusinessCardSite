import React from 'react';
import styles from './PortfolioList.module.css';
import { motion } from 'framer-motion';
import Portfolio from "../../UI/portfolio/Portfolio.tsx";
import {UserReviews} from "../../../architecture/userReviews/Models.ts";


const PortfolioList: React.FC = () => {
    const portfolioData: UserReviews[] = [
        { id: 0, customerImage: './images/customerImage.png', siteImage: './images/siteImage.png', customerName: 'Ваня', description: 'Детальная проработка технического задания - первый и очень важный этап.' },
        { id: 1, customerImage: './images/customerImage.png', siteImage: './images/siteImage.png', customerName: '', description: '' },
        { id: 2, customerImage: './images/customerImage.png', siteImage: './images/siteImage.png', customerName: '', description: '' },
    ];

    return (
        <div>

            <div className={styles.flex}>

                <div className={styles.circle}></div>
                <div className={styles.container}>
                    <div className={styles.container_flex}>
                        <div className={styles.text_block}>
                            <motion.p className={styles.title_one}>НАШИ<br/>РАБОТЫ</motion.p>
                            <motion.p className={styles.title_two}>ОТЗЫВЫ<br/>КЛИЕНТОВ</motion.p>
                            <div className={styles.description_flex}>
                                <img className={styles.arw} src="./svg/arw.svg" alt="arrow"/>
                                <motion.p className={styles.description}>VirtSpace - молодая студия веб-разработки,
                                    занимающаяся созданием современных сайтов. Наша небольшая, но перспективная команда
                                    всегда готова поработать над Вашим проектом!
                                </motion.p>
                            </div>
                        </div>
                        <div className={styles.portfolio_container}>
                            <div className={styles.portfolio_item_one}>
                                <Portfolio review={portfolioData[2]}/>
                            </div>
                            <div className={styles.portfolio_item_two}>
                                <Portfolio review={portfolioData[1]}/>
                            </div>
                            <div className={styles.portfolio_item_three}>
                                <Portfolio review={portfolioData[0]}/>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default PortfolioList;