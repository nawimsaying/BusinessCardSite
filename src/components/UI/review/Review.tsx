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
    const repeatCount = 3; // Сколько раз дублировать массив
    const limit = 10; // Ограничение на количество элементов с сервера

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const repository = new UserReviewsRepository(new UserReviewsApiClient());
                const data = await repository.getAll();
                const limitedData = data.slice(0, limit);
                const duplicatedData = Array.from({length: repeatCount}, () => limitedData).flat();
                setReviewsList(duplicatedData);
            } catch (error) {
                setError('Ошибка при получении данных');
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [repeatCount, limit]);

    return (
        <div className={classes.container}>
            {loading ? (
                <p>Идет загрузка...</p>
            ) : error ? (
                <p style={{textAlign: "center", width: "100%"}}>{error}</p>
            ) : (
                <div className={classes.outerContainer}>
                    <div className={`${classes.track} ${classes.containerSlide}`}>
                        {reviewsList.map((review, index) => (
                            <ItemReview key={index} review={review}/>
                        ))}
                    </div>
                    <div className={`${classes.track} ${classes.containerSlide}`}>
                        {reviewsList.map((review, index) => (
                            <ItemReview key={index + reviewsList.length} review={review}/>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Review;
