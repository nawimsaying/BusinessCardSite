import React from 'react';
import styles from './Portfolio.module.css';
import {UserReviews} from "../../../architecture/userReviews/Models.ts";


interface ItemReviewProps {
    review : UserReviews

}

const Portfolio: React.FC<ItemReviewProps> = ({review}) => {
    const {siteImage, customerName, customerImage,  description} = review;

    return (
        <div className={styles.container}>
            <div className={styles.imageSite}>
                <img src={siteImage} alt="SiteImage" className={styles.img}/>
            </div>
            
            { review.customerImage == '' ?
                <div className={styles.review_content}>
                    
                </div>
            :
                <div className={styles.review_content}>
                    <img src={customerImage} alt="UserPicture" className={styles.avatar}/>
                    <div className={styles.userInfo}>
                        <h1 className={styles.username}>{customerName}</h1>
                        <p className={styles.comment}>{description}</p>
                    </div>
                </div>
            }

        </div>
    );
};

export default Portfolio;