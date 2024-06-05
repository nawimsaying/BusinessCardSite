import React from 'react';
import styles from './styleContact.module.css';

interface ContactMessageProps {
    message: string | null;
    emailSentError: boolean;
    emailValidateSuccessfully: boolean;
}

const ContactMessage: React.FC<ContactMessageProps> = ({ message, emailSentError, emailValidateSuccessfully }) => (
    <div className={styles.bottom_block}>
        {emailSentError || emailValidateSuccessfully ? (
            <p className={styles.bottom_message_for_error}>{message}</p>
        ) : (
            <p className={styles.bottom_message}>{message}</p>
        )}
        <p className={styles.bottom_desc}>virtspaceweb@gmail.com</p>
    </div>
);

export default ContactMessage;
