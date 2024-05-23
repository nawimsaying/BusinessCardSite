import {useState} from 'react'
import '/src/index.css'
import styles from './EmailInputFooter.module.css'

const EmailInputFooter = () => {
    const [inputValue, setInputValue] = useState('');
    // @ts-ignore
    const [result, setResult] = useState('');

    const handleButtonClick = () => {
        // Выполняем действия с данными из input
        const processedData = processData(inputValue);
        setResult(processedData);
    };

    const processData = (data: string) => {
        // Обработка данных после нажатия на кнопку - Отправить email
        return data.toLowerCase();
    };

    return (
        <>
            <div className={styles.email}>
                <input className={styles.email_input}
                       placeholder='Email адрес'
                       type='email'
                       value={inputValue}
                       onChange={(e) => setInputValue(e.target.value)}>
                </input>

                <button className={styles.email_button_send} onClick={handleButtonClick}>Отправить</button>
            </div>
        </>
    )
}

export default EmailInputFooter