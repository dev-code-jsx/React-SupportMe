import { useState } from "react";
import { useEffect } from "react";
import { getRecurso } from "../../services/api";
import toast from "react-hot-toast";
export const getRecursosA = () => {
    const [recursos, setRecursos] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const obtenerRecursos = async () =>{
        setLoading(true)
        try {
            const recursosData = await getRecurso()
            if(recursosData.error){
                toast.error(
                    recursosData.e.response?.data || "Error al obtener los recursos"
                )
            }else{
                setRecursos(recursosData.data.recurso)
            }
        } catch (error) {
            console.error("Error al obtener los recursos:", error);
            toast.error("Error al obtener los recursos");
        } finally{
            setLoading(false)
        }
    }
    useEffect(() =>{
        obtenerRecursos()
    }, [])
  return{recursos, loading, error, obtenerRecursos}
}
