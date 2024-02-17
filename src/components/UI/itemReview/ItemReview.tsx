// ItemReview.tsx
import React from 'react';
import classes from "./ItemReviews.module.css";
import {UserReviews} from "../../../architecture/userReviews/Models.ts";

interface ItemReviewProps {
    review: UserReviews; // Принимаем отзыв как пропс
}

const ItemReview: React.FC<ItemReviewProps> = ({review}) => {
    const {siteImage, customerName, customerImage, rating, description} = review;

    const gridImage = rating >= 5 ? '/images/GradeFive.png' : '/images/GradeFourPointFive.png';

    return (
        <div className={classes.container}>
            <div className={classes.imageSite}>
                <img src={siteImage} alt="SiteImage" className={classes.img}/>
            </div>
            <div className={classes.reviewContent}>
                <div className={classes.commentSeparator}></div>
                <div className={classes.containerForReviewUser}>
                    <div className={classes.containerForUserData}>
                        <img src={customerImage} alt="UserPicture" className={classes.avatar}/>
                        <div className={classes.userInfo}>
                            <h1 className={classes.styleUsernameH1}>{customerName}</h1>
                            <img src={gridImage} alt="UserPicture" className={classes.gird}/>
                        </div>
                    </div>
                    <div className={classes.containerComment}>
                        <p className={classes.comment}>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemReview;
