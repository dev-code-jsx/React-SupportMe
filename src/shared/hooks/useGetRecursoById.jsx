import { useEffect } from 'react';
import { useState } from 'react';
import { getByIdRecurso } from '../../services/api';
import toast from 'react-hot-toast';
export const useGetRecursoById = (id) => {
  const [recurso, setRecurso] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchRecurso = async () => {
      setLoading(true);
      try {
        const recursoData = await getByIdRecurso(id);
        if (recursoData.error) {
          toast.error(
            recursoData.e.response?.data || 'Error al obtener el recurso'
          );
        } else {
          setRecurso(recursoData.data.recurso);
        }
      } catch (error) {
        console.error('Error al obtener el recurso:', error);
        toast.error('Error al obtener el recurso');
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      fetchRecurso();
    }
  }, [id]);
  return {recurso, loading, error};
};
