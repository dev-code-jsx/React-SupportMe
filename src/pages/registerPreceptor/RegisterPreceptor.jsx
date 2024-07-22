import { Card } from "../../components/Card";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Label } from "../../components/Label";
import logo from "../../assets/img/logo.jpeg";
import { useState, useEffect } from "react";
import { useRegisterPreceptor } from "../../shared/hooks/useRegisterPreceptor";

export const RegisterPreceptor = () => {
  const { register, isLoading } = useRegisterPreceptor();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('user');
    if (token) {
      setAuthorized(true);
    } else {
      localStorage.removeItem('user');
      window.location.href = '/unauthorized';
    }
  }, []);

  const [formState, setFormState] = useState({
    nombre: {
      value: "",
      isValid: true,
      showError: false,
    },
    correo: {
      value: "",
      isValid: true,
      showError: false,
    },
    password: {
      value: "",
      isValid: true,
      showError: false,
    },
  });

  const handleInputValueChange = (e) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        value,
      },
    }));
  };

  const handleRegister = async (event) => {
    event.preventDefault();
    await register(
      formState.nombre.value,
      formState.correo.value,
      formState.password.value
    );

    setFormState({
      nombre: { value: "", isValid: true, showError: false },
      correo: { value: "", isValid: true, showError: false },
      password: { value: "", isValid: true, showError: false },
    });
  };

  const isSubmitButtonDisabled =
    isLoading ||
    !formState.nombre.value ||
    !formState.correo.value ||
    !formState.password.value;

  if (!authorized) {
    return <div>Cargando...</div>;
  }
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="mx-auto w-full sm:w-11/12 md:w-3/4 lg:w-1/2 xl:w-1/3 h-auto flex items-center">
        <form onSubmit={handleRegister} className="flex flex-col items-center gap-4 p-6 w-full">
          <img
            src={logo}
            width={64}
            height={64}
            alt="Company Logo"
            className="rounded-full"
          />
          <h2 className="text-2xl font-bold text-white">SupportMe</h2>
          <div className="space-y-4 w-full">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre</Label>
              <Input
                id="nombre"
                type="text"
                placeholder="Tu nombre"
                value={formState.nombre.value}
                onChange={handleInputValueChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="correo">Email</Label>
              <Input
                id="correo"
                type="email"
                placeholder="m@example.com"
                value={formState.correo.value}
                onChange={handleInputValueChange}
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="**********"
                value={formState.password.value}
                onChange={handleInputValueChange}
                required
              />
            </div>
            <Button disabled={isSubmitButtonDisabled} type="submit" className="w-full">
              Registrar preceptor
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};
