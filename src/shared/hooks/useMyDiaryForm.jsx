import { useState } from 'react';

export const useMyDiaryForm = () => {
    const [formState, setFormState] = useState({
        contenido: { value: '', isValid: true, showError: false },
    });

    const handleInputValueChange = (e) => {
        const { id, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [id]: {
                ...prevState[id],
                value,
            },
        }));
    };

    const resetForm = () => {
        setFormState({
            contenido: { value: '', isValid: false, showError: false }
        });
    };

    return {
        formState,
        handleInputValueChange,
        resetForm
    };
};
