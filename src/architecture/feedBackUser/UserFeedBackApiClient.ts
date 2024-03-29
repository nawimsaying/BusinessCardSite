import axios, {AxiosResponse} from 'axios';
import {IUserFeedbackSource} from './IUserFeedbackSource';
import {Result} from '../Result.ts';
import {UserFeedback} from './Models';


export class UserFeedBackApiClient implements IUserFeedbackSource {
    private readonly client = axios.create();


    async sendEmail(email: string): Promise<Result<UserFeedback>> {
        try {
            const response: AxiosResponse<any> = await this.client.post(`http://5.35.82.27:82/api/Feedbacks/sendmail`, {
                email: email,
            });

            return Result.success(response.data);
        } catch (error: any) {
            const statusResponse = error.response?.status;
            return Result.error(`Status code ${statusResponse}`);
        }
    }


    // Implement other methods
}
