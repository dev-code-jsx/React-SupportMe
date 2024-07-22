import { useState } from 'react';
import { useEffect } from 'react';
import { deleteRecurso } from '../../services/api';
import toast from 'react-hot-toast';
export const useDeleteResource = () => {
  const [error, setError] = useState(null);
  const handleDelete = async (id) => {
    setError(null);
    try {
      const response = await deleteRecurso(id);
      console.log('Delete resource response', response);
      if (response.error) {
        toast.error('Error al eliminar el recurso');
      } else {
        toast.error('Recurso eliminado correctamente');
      }
    } catch (error) {
      console.error('Error deleting resource:', error);
      setError(error.message);
    }
  };
  return {handleDelete, error};
};
