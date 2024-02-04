import {IUserFeedbackSource} from "./IUserFeedbackSource.ts";
import {UserFeedback} from "./Models.ts";


export class UserFeedbackRepository {
    private readonly remote: IUserFeedbackSource;

    constructor(remote: IUserFeedbackSource) {
        this.remote = remote;
    }

    async getByUserId(email: string): Promise<UserFeedback> {
        const result = await this.remote.sendEmail(email);

        if (result.isSuccess()) {
            return result.getData()!;
        } else {
            throw new Error(result.getException());
        }
    }


    // Остальные методы
}