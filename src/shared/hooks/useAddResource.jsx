import { addRecurso } from "../../services/api"
import { useState } from "react"
export const useAddResource = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const addResource = async (data) =>{
        setIsLoading(true)
        try {
            const response = await addRecurso(data)
            setIsLoading(false)
            return response.data
        } catch (e) {
            setIsLoading(false)
            setError(e.response ? e.response.data.message : "Transfer failed");   
            return {error: true, message: e.message}
        }
    }
  return {addResource, isLoading, error}
}
