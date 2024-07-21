import { editRecurso } from '../../services/api'
import toast from 'react-hot-toast'
import { useState } from 'react'
export const useUpdateResource = () => {
    const [loadingResource, setLoading] = useState(false);
    const [error, setError] = useState(null)
    const actualizarRecurso = async (id, data) =>{
        setLoading(true)
        setError(null)
        try {
            const response = await editRecurso(id, data)
            if(response.error){
                toast.error("Error al actualizar el recurso")
            } else{
                toast.success("Recurso actualizado correctamente")
            }
            setLoading(false)
            return response
        } catch (error) {
            toast.error("Error al procesar la solicitud")
            setLoading(false)
        }
    }
  return { actualizarRecurso, loadingResource, error}
}