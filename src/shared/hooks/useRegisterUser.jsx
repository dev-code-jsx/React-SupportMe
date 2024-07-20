import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerPaciente as registerPacienteRequest } from "../../services/api";
import toast from "react-hot-toast"; 

export const useRegisterUser = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const register = async (nombre, correo, password) => {
    setIsLoading(true);

    try {
      const response = await registerPacienteRequest({
        nombre,
        correo,
        password,
      });

      setIsLoading(false);

      if (response.error) {
        toast.error(
          response.e?.response?.data || "Ocurrió un error al registrar el usuario"
        );
        return;
      }

      toast.success("Registro exitoso");
      navigate("/");
    } catch (error) {
      setIsLoading(false);
      toast.error("Ocurrió un error al registrar el usuario");
    }
  };

  return {
    register,
    isLoading,
  };
};
