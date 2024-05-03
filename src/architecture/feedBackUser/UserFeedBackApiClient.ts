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

            const { message, success }: { message: string, success: boolean } = response.data;


            const messageForUser: string = message;
            const emailSent: boolean = success;

            const responseBody: UserFeedback = {
                messageForUser,
                emailSent
            };

            return Result.success(responseBody);



     /*       const ResponseForUser = new UserFeedback(response.data, true);
            return Result.success(ResponseForUser);*/
        } catch (error: any) {
            const errorFeedback = new UserFeedback('Возникла ошибка при отправке Email.', false);
            return Result.error(errorFeedback);
        }
    }

}
