import {UserFeedback} from "./Models.ts";
import {Result} from "../Result.ts";


export interface IUserFeedbackSource {
    sendEmail(emaill: string): Promise<Result<UserFeedback>>;

}


