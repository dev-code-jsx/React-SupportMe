import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerPaciente as registerPacienteRequest } from "../../services/api";

export const useRegisterUser = () => {
  const [ isLoading, setIsLoading ] = useState(false);

  const navigate = useNavigate();

  const register = async (nombre, correo, password) => {
    setIsLoading(true);

    const response = await registerPacienteRequest({
      nombre,
      correo,
      password,
    });

    setIsLoading(false);
    if (response.error) {
      return toast.error(
        response.e?.response?.data || "Ocurrió un error al iniciar sesión"
      );
    }
    
    navigate("/");
  };
  return {
    register,
    isLoading,
  };
};
