import { useState } from 'react';
import { addContent } from '../../services/api';

export const useAddMyDiary = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const handleAddEntry = async (contenido) => {
        setIsLoading(true);
        setError(null);

        try {


            const fecha = new Date().toISOString().split('T')[0];

            const response = await addContent({
                contenido,
                fecha
            });

            if (response.error) {
                throw new Error(response.e.message);
            }

            return response.data;
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    };

    return { isLoading, error, handleAddEntry };
};
