import { useState } from 'react';
import { UserFeedbackRepository } from '../../../architecture/feedBackUser/UserFeedbackRepository.ts';
import { UserFeedBackApiClient } from '../../../architecture/feedBackUser/UserFeedBackApiClient.ts';
import * as EmailValidator from 'email-validator';

export const useContact = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [email, setEmail] = useState('');
    const [emailValidateSuccessfully, setEmailValidateSuccessfully] = useState(false);
    const [emailSentSuccessfully, setEmailSentSuccessfully] = useState(false);
    const [emailSentError, setEmailSentError] = useState(false);

    const sendEmail = async (email: string) => {
        try {
            setLoading(true);
            if (EmailValidator.validate(email)) {
                const repository = new UserFeedbackRepository(new UserFeedBackApiClient());
                const responseEmail = await repository.sendEmail(email);
                setError(responseEmail.messageForUser);

                setEmailValidateSuccessfully(false);
                setEmailSentSuccessfully(responseEmail.emailSent);
                setEmailSentError(!responseEmail.emailSent);
            } else {
                setEmailValidateSuccessfully(true);
                setError('Почта введена некорректно.');
            }
        } finally {
            setLoading(false);
        }
    };

    const handleSendEmail = async () => {
        if (email.trim() === '') {
            setEmailValidateSuccessfully(true);
            setError('Поле пустое. Введите адрес эл. почты.');
            console.error('Поле пустое. Введите адрес эл. почты.');
            return;
        }
        await sendEmail(email);
    };

    return {
        loading,
        error,
        email,
        emailValidateSuccessfully,
        emailSentSuccessfully,
        emailSentError,
        setEmail,
        handleSendEmail,
    };
};
