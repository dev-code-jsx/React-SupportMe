import { Card } from '../../components/Card';
import { Button } from '../../components/Button';
import { Input } from '../../components/Input';
import { Label } from '../../components/Label';
import logo from '../../assets/img/logo.jpeg';
import { useLogin } from '../../shared/hooks/useLogin';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const Auth = () => {
  const { login, isLoading } = useLogin();
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    correo: {
      value: "",
      isValid: false,
      showError: false,
    },
    password: {
      value: "",
      isValid: false,
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

  const handleRegister = () => {
    navigate('/register');
  }

  const handleLogin = (event) => {
    event.preventDefault();
    console.log("Login form submitted", formState.correo.value, formState.password.value);
    login(formState.correo.value, formState.password.value);
  };

  const isSubmitButtonDisabled = isLoading || !formState.password.isValid || !formState.correo.isValid;

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Card className="mx-auto w-full sm:w-11/12 md:w-3/4 lg:w-1/2 xl:w-1/3 h-96 flex items-center">
        <form onSubmit={handleLogin} className="flex flex-col items-center  p-6 w-full">
          <img src={logo} width={64} height={64} alt="Company Logo" className="rounded-full" />
          <h2 className="text-2xl font-bold text-white">SupportMe</h2>
          <div className="space-y-4 w-full">
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
              {formState.correo.showError && <p className="error-message">Invalid Email</p>}
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="********"
                value={formState.password.value}
                onChange={handleInputValueChange}
                required
              />
              {formState.password.showError && <p className="error-message">Invalid Password</p>}
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitButtonDisabled}>
              Iniciar Sesión
            </Button>
            <a 
            onClick={handleRegister} 
            className="text-blue-200 hover:text-blue-400 hover:underline hover:brightness-125 cursor-pointer flex flex-col items-center margin 0"
          >
            Regístrate
          </a>
          </div>
        </form>
      </Card>
    </div>
  );
};
