import { useState, useEffect } from 'react';
import { getMyDiary } from '../../services/api';

export const useGetDiary = () => {
    const [diarios, setDiarios] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchDiarios = async () => {
            setIsLoading(true);
            try {
                const response = await getMyDiary();
                setDiarios(response.data.diarios);
                setIsLoading(false);
            } catch (e) {
                setIsLoading(false);
                setError(e.response ? e.response.data.message : "Failed to fetch diaries");
            }
        };

        fetchDiarios();
    }, []);

    return { diarios, isLoading, error };
};
