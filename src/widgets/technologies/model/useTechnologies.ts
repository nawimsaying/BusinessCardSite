import { useState } from 'react';

const useTechnologies = () => {
    const [text, setText] = useState('REACT, TYPESCRIPT');
    const [activeButton, setActiveButton] = useState(1);
    const [isChanging, setIsChanging] = useState(false);

    const handleButtonClick = (buttonId: number) => {
        setActiveButton(buttonId);
        setIsChanging(true);

        setTimeout(() => {
            switch (buttonId) {
                case 1:
                    setText('React, TypeScript');
                    break;
                case 2:
                    setText('ASP.NET Core');
                    break;
                case 3:
                    setText('Docker, GitHub');
                    break;
                default:
                    setText('');
                    break;
            }
            setIsChanging(false);
        }, 400);
    };

    return { text, activeButton, isChanging, handleButtonClick };
};

export default useTechnologies;
