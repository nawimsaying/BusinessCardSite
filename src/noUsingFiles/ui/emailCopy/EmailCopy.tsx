// @ts-ignore
import {useState} from 'react'
import '/src/index.css'
import styles from './EmailCopy.module.css'

const EmailCopy = () => {
    return (
        <>
            <div className={styles.email}>
                <div className={styles.email_copy}>
                    <h4 className={styles.text_email}>virtspaceweb@gmail.com</h4>

                    <button className={styles.copy_button} onClick={copyToClipboard}>
                        <img className={styles.copy_email_icon} src='../../../../public/svg/copy_email_icon.svg'></img>
                    </button>
                </div>
            </div>
        </>
    )
}

// Функция для копирования Email
function copyToClipboard() {
    const textToCopy = "virtspaceweb@gmail.com";

    navigator.clipboard.writeText(textToCopy)
        .then(() => {
            alert('Email скопирован в буфер обмена');
        })
        .catch((error) => {
            console.error('Ошибка копирования Email: ', error);
        });
}

export default EmailCopy