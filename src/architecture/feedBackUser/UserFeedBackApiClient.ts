import axios, {AxiosResponse} from 'axios';

import {IUserFeedbackSource} from './IUserFeedbackSource';
import {Result} from '../Result.ts'; // Подразумевается, что Result.ts находится в этой директории
import {UserFeedback} from './Models';

export class UserFeedBackApiClient implements IUserFeedbackSource {
    private readonly client = axios.create();


    async sendEmail(email: string): Promise<Result<UserFeedback>> {
        try {
            const response: AxiosResponse<any> = await this.client.post('http://31.129.100.55:81/api/Feedbacks/sendmail', {
                email: email,
            });
            const userFeedback = new UserFeedback(response.status);

            return Result.success<UserFeedback>(userFeedback);
        } catch (error: any) {
            const statusResponse = error.response?.status || 500;
            return Result.error<UserFeedback>(`Error status code ${statusResponse}`);
        }
    }


    // Implement other methods
}
