import React from 'react';
import styles from './PortfolioList.module.css';
import { motion } from 'framer-motion';
import Portfolio from "../../UI/portfolio/Portfolio.tsx";
import review from "../../UI/review/Review.tsx";
import {UserReviews} from "../../../architecture/userReviews/Models.ts";


const PortfolioList: React.FC = () => {
    const portfolioData: UserReviews[] = [
        { id: 1, customerImage: './images/customerImage.png', siteImage: './images/siteImage.png', customerName: 'Test', description: 'Детальная проработка технического задания - первый и очень важный этап для упешной разработки любого продукта.' },
        { id: 2, customerImage: './images/customerImage.png', siteImage: './images/siteImage.png', customerName: 'Test 2', description: 'description 2description description' },
        { id: 3, customerImage: './images/customerImage.png', siteImage: './images/siteImage.png', customerName: 'Test 3', description: 'description 3 description description' },
        { id: 4, customerImage: './images/customerImage.png', siteImage: './images/siteImage.png', customerName: 'Test 4', description: 'description 444 description description' },
        { id: 5, customerImage: './images/customerImage.png', siteImage: './images/siteImage.png', customerName: 'Test 5', description: 'description  555description description' },
        { id: 6, customerImage: './images/customerImage.png', siteImage: './images/siteImage.png', customerName: 'Test 6', description: 'description 6 description description' },

    ];

    return (
        <div>

            <div className={styles.flex}>

                <div className={styles.circle}></div>
                <div className={styles.container}>
                    <div className={styles.container_flex}>
                        <div className={styles.text_block}>
                            <motion.p className={styles.title_one}>НАШИ<br/> РАБОТЫ</motion.p>
                            <motion.p className={styles.title_two}>ОТЗЫВЫ<br/> КЛИЕНТОВ</motion.p>
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
                                <Portfolio review={portfolioData[1]}/>
                            </div>
                            <div className={styles.portfolio_item_two}>
                                <Portfolio review={portfolioData[0]}/>
                                <Portfolio review={portfolioData[3]}/>
                            </div>
                            <div className={styles.portfolio_item_three}>
                                <Portfolio review={portfolioData[4]}/>
                                <Portfolio review={portfolioData[5]}/>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default PortfolioList;