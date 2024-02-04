import {IUserReviewsSource} from "./IUserReviewsSource.ts";
import {UserReviews} from "./Models.ts";


export class UserReviewsRepository {
    private readonly remote: IUserReviewsSource;

    constructor(remote: IUserReviewsSource) {
        this.remote = remote;
    }

    async getAll(): Promise<UserReviews[]> {
        const result = await this.remote.getAll();

        if (result.isSuccess()) {
            return result.getData()!;
        } else {
            throw new Error(result.getException());
        }
    }
}