import {UserReviews} from "./Models.ts";
import {Result} from "../Result.ts";

export interface IUserReviewsSource {
    getAll(): Promise<Result<UserReviews[]>>;
}