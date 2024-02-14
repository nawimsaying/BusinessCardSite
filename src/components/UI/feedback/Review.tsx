// @ts-ignore
import React from 'react';
import classes from "./Review.module.css";
import ItemReview from "../itemReview/ItemReview.tsx";

const Review = () => {
    return (
        <div>
            <div className={classes.feedback}>

                <h1 className={classes.title}>Отзывы клиентов</h1>

                <div className={classes.container}>
                    <ItemReview/>

                </div>
            </div>
        </div>

    );
};

export default Review;