import React from 'react';
import { BeatLoader } from 'react-spinners';
import styles from './styleContact.module.css';

interface ContactFormProps {
    email: string;
    setEmail: (email: string) => void;
    handleSendEmail: () => void;
    loading: boolean;
    emailSentSuccessfully: boolean;
    emailSentError: boolean;
    emailValidateSuccessfully: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({
                                                     email,
                                                     setEmail,
                                                     handleSendEmail,
                                                     loading,
                                                     emailSentSuccessfully,
                                                     emailSentError,
                                                     emailValidateSuccessfully,
                                                 }) => {
    const handleKeyPress = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            handleSendEmail();
        }
    };

    return (
        <>
            {emailSentError || emailValidateSuccessfully ? (
                <div className={styles.desc_block_for_error}>
                    <input
                        placeholder='EMAIL АДРЕС'
                        type='email'
                        className={styles.desc_input_for_error}
                        value={email}
                        onKeyDown={handleKeyPress}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <button className={styles.desc_btn} onClick={handleSendEmail} disabled={loading}>
                        {loading ? <BeatLoader color='#FFF' /> : 'ОТПРАВИТЬ'}
                    </button>
                </div>
            ) : (
                <div className={styles.desc_block}>
                    <input
                        placeholder='EMAIL АДРЕС'
                        type='email'
                        className={styles.desc_input}
                        value={email}
                        onKeyDown={handleKeyPress}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {emailSentSuccessfully ? (
                        <button className={styles.check_btn} disabled={true}>
                            <img
                                src='./svg/check_icon.svg'
                                alt='iconCheck'
                                style={{
                                    width: '50px',
                                    height: '50px',
                                }}
                            />
                        </button>
                    ) : (
                        <button className={styles.desc_btn} onClick={handleSendEmail} disabled={loading}>
                            {loading ? <BeatLoader color='#FFF' /> : 'ОТПРАВИТЬ'}
                        </button>
                    )}
                </div>
            )}
        </>
    );
};

export default ContactForm;
