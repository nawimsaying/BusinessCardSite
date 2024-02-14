import React, {useState, useEffect} from 'react';
import classes from "./ItemReviews.module.css";
import {UserReviews} from "../../../architecture/userReviews/Models.ts";
import {UserReviewsApiClient} from "../../../architecture/userReviews/UserReviewsApiClient.ts";
import {UserReviewsRepository} from "../../../architecture/userReviews/UserReviewsRepository.ts";

const ItemReview = () => {

    const imageTest1 = 'https://miro.medium.com/v2/resize:fit:700/1*7Qy6qbDkrIQ_7qPrnSqkiA.png'
    const imageTest2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_YZtxp2SL0ulBsgwMURKfnUwpYgBdkw9oA_xR9gkf1DfKFTLdNp0z7jmXbs2opDlOn0M&usqp=CAU'
    const imageTest3 = 'https://htmlburger.com/blog/wp-content/uploads/2023/04/modern-website-design-examples.jpg'


    return (
        <div className={classes.container}>

            <div className={classes.imageSite}>
                <img src={imageTest3} alt="SiteImage" className={classes.img}/>
            </div>
            <div className={classes.reviewContent}>

                <div className={classes.test}>

                </div>
            </div>


        </div>
    );
};

export default ItemReview;
