// @ts-ignore
import React from 'react';
import Review from "noUsingFiles/ui/review/Review.tsx";
import classes from './CustomerReviewsForPortfolio.module.css';

const CustomerReviewsForPortfolio = () => {
    return (
        <div className={classes.pageContainer}>
            <div className={classes.customerReviews}>
                <h1 className={classes.h1Font}>Отзывы клиентов</h1>
                <div className={classes.reviewWrapper}>
                    <Review/>
                </div>
            </div>
        </div>
    );
};

export default CustomerReviewsForPortfolio;