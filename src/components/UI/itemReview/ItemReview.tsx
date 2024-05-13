// ItemReview.tsx
import React from 'react';
import classes from "./ItemReviews.module.css";
import {UserReviews} from "../../../architecture/userReviews/Models.ts";

interface ItemReviewProps {
    review: UserReviews;
}

const ItemReview: React.FC<ItemReviewProps> = ({review}) => {
    const {siteImage, customerName, customerImage,  description} = review;


    return (
        <div className={classes.container}>
            <div className={classes.imageSite}>
                <img src={siteImage} alt="SiteImage" className={classes.img}/>
            </div>
            <div className={classes.reviewContent}>

                <div className={classes.containerForReviewUser}>
                    <div className={classes.containerForUserData}>
                        <img src={customerImage} alt="UserPicture" className={classes.avatar}/>
                        <div className={classes.userInfo}>
                            <h1 className={classes.styleUsernameH1}>{customerName}</h1>
                        </div>
                    </div>
                    <div className={classes.containerComment}>
                        <div className={classes.commentSeparator}></div>
                        <p className={classes.comment}>{description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ItemReview;
