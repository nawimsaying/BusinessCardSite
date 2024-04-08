import axios, {AxiosResponse} from 'axios';

import {IUserReviewsSource} from './IUserReviewsSource';
import {Result} from '../Result.ts'; // Подразумевается, что Result.ts находится в этой директории
import {UserReviews} from './Models';


export class UserReviewsApiClient implements IUserReviewsSource {

    private readonly client = axios.create();

    async getAll(): Promise<Result<UserReviews[]>> {
        try {
            const response: AxiosResponse<any[]> = await this.client.get(`https://virtspace.dev/server/api/Reviews`);
            const jsonResponse: any[] = response.data;

            const userReviews: UserReviews[] = jsonResponse.map((item: any) => {
                const id = item.id;
                const siteImage = item.siteImage;
                const customerName = item.customerName;
                const customerImage = item.customerImage;
                const rating = item.rating;
                const description = item.description;
                return {
                    id,
                    siteImage,
                    customerName,
                    customerImage,
                    rating,
                    description

                } as UserReviews;
            });
            return Result.success(userReviews);
        } catch (error: any) {
            return Result.error<UserReviews[]>('Error not fount data');
        }
    }

    // Implement other methods
}
