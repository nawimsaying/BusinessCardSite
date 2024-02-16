// @ts-ignore
import React, {useEffect, useState} from 'react';
import classes from './Review.module.css';
import ItemReview from '../itemReview/ItemReview.tsx';
import {UserReviews} from '../../../architecture/userReviews/Models.ts';
import {UserReviewsRepository} from '../../../architecture/userReviews/UserReviewsRepository.ts';
import {UserReviewsApiClient} from '../../../architecture/userReviews/UserReviewsApiClient.ts';

const Review = () => {
    const [reviewsList, setReviewsList] = useState<UserReviews[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);

            try {
                const repository = new UserReviewsRepository(new UserReviewsApiClient());
                const data = await repository.getAll();
                setReviewsList(data);
            } catch (error) {
                setError('Ошибка при получении данных');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);


    const limitedReviewsList = reviewsList.slice(0, 3);

    return (
        <div>
            <div className={classes.feedback}>
                <h1 className={classes.title}>Отзывы клиентов</h1>
                <div className={classes.container}>
                    {loading ? (
                        <p>Идет загрузка...</p>
                    ) : error ? (
                        <p>{error}</p>
                    ) : (
                        limitedReviewsList.map((review, index) => (
                            <ItemReview key={index} review={review}/>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
};

export default Review;
