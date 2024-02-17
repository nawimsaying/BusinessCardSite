// @ts-ignore
import React from 'react';
import Review from "../review/Review.tsx";
import classes from './CustomerReviews.module.css';

const CustomerReviews = () => {
    return (
        <div className={classes.pageContainer}> {/* Контейнер страницы с определенным размером */}
            <div className={classes.customerReviews}> {/* Применяем класс с CSS-стилями к обертке */}
                <h1 className={classes.h1Font}>Отзывы клиентов</h1>
                <div className={classes.reviewWrapper}> {/* Обертка с дополнительным отступом */}
                    <Review/>
                </div>
            </div>
        </div>
    );
};

export default CustomerReviews;