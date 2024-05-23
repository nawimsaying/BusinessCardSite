// @ts-ignore
import React from 'react';
import Review from "noUsingFiles/ui/review/Review.tsx";
import classes from './CustomerReviewsForMain.module.css';


const CustomerReviewsForMain = () => {
    return (
        <div className={classes.pageContainer}>

            <div className={classes.flex_bg}>
                <div className={classes.flex_bg_1}>
                    <img className={classes.left_bg_image} src='../../../../public/images/GridForReview.png'></img>
                </div>

                <div className={classes.flex_bg_2}>
                    <img className={classes.right_bg_image}
                         src='../../../../public/images/Grid2ForReview.png'></img>
                </div>
            </div>

            <div className={classes.customerReviews}>
                <h1 className={classes.h1Font}>Отзывы клиентов</h1>
                <div className={classes.reviewWrapper}>
                    <Review/>
                </div>
            </div>


        </div>
    );
};

export default CustomerReviewsForMain;