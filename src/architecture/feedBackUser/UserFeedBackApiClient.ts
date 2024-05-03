import axios, {AxiosResponse} from 'axios';
import {IUserFeedbackSource} from './IUserFeedbackSource';
import {Result} from '../Result.ts';
import {UserFeedback} from './Models';


export class UserFeedBackApiClient implements IUserFeedbackSource {
    private readonly client = axios.create();


    async sendEmail(email: string): Promise<Result<UserFeedback>> {


        try {
            const response: AxiosResponse<any> = await this.client.post(`https://virtspace.dev/server/api/Feedbacks/sendmail`, {
                email: email,
            });

            const ResponseForUser = new UserFeedback(response.data, true);
            return Result.success(ResponseForUser);
        } catch (error: any) {
            const errorFeedback = new UserFeedback('Возникла ошибка при отправке Email.', false);
            return Result.error(errorFeedback);
        }
    }

}
