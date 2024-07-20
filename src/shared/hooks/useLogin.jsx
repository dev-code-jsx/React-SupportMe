import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { login as loginRequest } from "../../services/api";
import toast from "react-hot-toast";

export const useLogin = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const login = async (correo, password) => {
    setIsLoading(true);

    const response = await loginRequest({
      correo,
      password
    });

    setIsLoading(false);
    if (response.error) {
      return toast.error(
        response.e?.response?.data || 'Ocurrió un error al iniciar sesión'
      );
    }

    const { userDetails } = response.data;

    localStorage.setItem('user', JSON.stringify(userDetails));

    switch (userDetails.role) {
      case 'ADMIN_ROLE':
        navigate('/principal/admin');
        break;
      case 'PACIENTE_ROLE':
        navigate('/principal');
        break;
      case 'PRECEPTOR_ROLE':
        navigate('/principal/preceptor');
        break;                
      default:
        navigate('/');
    }
  };

  return {
    login,
    isLoading
  };
};
