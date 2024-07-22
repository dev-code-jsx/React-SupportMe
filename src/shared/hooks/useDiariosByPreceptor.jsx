import { useState, useEffect } from "react";
import { getDiarioByPreceptor } from "../../services/api"; // Asegúrate de que esta función esté implementada correctamente en tu servicio API
import toast from "react-hot-toast";

export const useDiariosByPreceptor = () => {
  const [diarios, setDiarios] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const obtenerDiarios = async () => {
    setLoading(true);
    try {
      const diaryData = await getDiarioByPreceptor();
      if (diaryData.error) {
        const errorMessage =
          diaryData.error.response?.data?.msg || "Error loading diaries";
        setError(errorMessage);
        toast.error(errorMessage);
      } else {
        setDiarios(diaryData.data.diarios);
      }
    } catch (e) {
      const errorMessage = e.response?.data?.msg || "Error loading diaries";
      setError(errorMessage);
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      obtenerDiarios();
    } else {
      setError("User not found in localStorage");
      setLoading(false);
    }
  }, []);

  return { diarios, loading, error };
};
