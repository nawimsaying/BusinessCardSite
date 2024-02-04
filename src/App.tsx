// @ts-ignore
import React, {useEffect, useState} from 'react';
import {UserReviewsRepository} from './architecture/userReviews/UserReviewsRepository.ts';
import {UserReviewsApiClient} from './architecture/userReviews/UserReviewsApiClient.ts';
import {UserReviews} from './architecture/userReviews/Models.ts';

function App() {
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


    return (
        <>
            <div id="root" style={{maxWidth: '1280px', margin: '0 auto', padding: '3rem', textAlign: 'center'}}>
                {loading && <div>Loading...</div>}
                {error && <div>Error: {error}</div>}

                <div>
                    <h2>All Reviews:</h2>
                    {reviewsList.map((reviews) => (
                        <div key={reviews.id} className="card" style={{padding: '2em', marginBottom: '1em'}}>
                            <h3>{reviews.id}</h3>
                            <p>ID: {reviews.customerName}</p>
                            <p>{reviews.description}</p>
                            <p>{reviews.rating}</p>
                        </div>
                    ))}
                </div>

            </div>
        </>
    );
}

export default App;
