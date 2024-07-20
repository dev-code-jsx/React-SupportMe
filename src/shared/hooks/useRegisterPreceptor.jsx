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
        return toast.error(
          response.e?.response?.data || "Ocurrió un error al registrar el usuario"
        );
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
