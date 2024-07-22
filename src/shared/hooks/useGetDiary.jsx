import { useState, useEffect } from "react";
import { getDiarioByPaciente } from "../../services/api";
import toast from 'react-hot-toast';

export const useGetDiary = () => {
    const [diarios, setDiarios] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const formatDate = (date) => {
        const d = new Date(date);
        const day = d.getDate().toString().padStart(2, '0');
        const month = (d.getMonth() + 1).toString().padStart(2, '0');
        const year = d.getFullYear();
        return `${day}/${month}/${year}`;
    };

    const obtenerDiarios = async (id) => {
        setLoading(true);
        try {
            const diaryData = await getDiarioByPaciente(id);
            console.log('Data fetched:', diaryData.data); // Verifica la estructura de los datos
            if (diaryData.error) {
                const errorMessage = diaryData.error.response?.data?.msg || 'Error loading diaries';
                setError(errorMessage);
                toast.error(errorMessage);
            } else {
                setDiarios(diaryData.data.diarios.map(diario => ({
                    fecha: formatDate(diario.createdAt), // Formatea la fecha
                    contenido: diario.entradas.map(entrada => entrada.contenido).join(' ') // Combina los contenidos
                })));
            }
        } catch (e) {
            const errorMessage = e.response?.data?.msg || 'Error loading diaries';
            setError(errorMessage);
            toast.error(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        const storedUser = localStorage.getItem('user');
        if (storedUser) {
            const { id } = JSON.parse(storedUser);
            obtenerDiarios(id);
        } else {
            setError('User not found in localStorage');
            setLoading(false);
        }
    }, []);

    return { diarios, loading, error };
};
