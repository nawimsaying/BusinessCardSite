import {UserFeedback} from "./Models.ts";
import {Result} from "../Result.ts";


export interface IUserFeedbackSource {
    sendEmail(email: string): Promise<Result<UserFeedback>>;

}


