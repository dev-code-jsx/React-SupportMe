import { useState } from "react";
import { registerPreceptor as registerPreceptorRequest } from "../../services/api";
import toast from "react-hot-toast";

export const useRegisterPreceptor = () => {
  const [isLoading, setIsLoading] = useState(false);

  const register = async (nombre, correo, password) => {
    setIsLoading(true);

    try {
      const response = await registerPreceptorRequest({
        nombre,
        correo,
        password,
      });

      setIsLoading(false);

      if (response.error) {
        if (response.error.response && response.error.response.status === 400 && response.error.response.data.includes('email already registered')) {
          return toast.error("El correo ya está registrado");
        }

        return toast.error(response.error.response?.data || "El correo ya está registrado o hay datos nulos");
      }

      toast.success("Registro exitoso");

    } catch (error) {
      setIsLoading(false);
      toast.error("Ocurrió un error al registrar el preceptor");
    }
  };

  return {
    register,
    isLoading,
  };
};
