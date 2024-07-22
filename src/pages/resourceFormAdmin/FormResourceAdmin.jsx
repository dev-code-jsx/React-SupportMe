import { CardForm } from '../../components/CardForm';
import { CardContentForm } from '../../components/CardContentForm';
import { CardFooterForm } from '../../components/CardFooterForm';
import { LabelForm } from '../../components/LabelForm';
import { InputForm } from '../../components/InputForm';
import {
  SelectForm,
  SelectTriggerForm,
  SelectContentForm,
  SelectItemForm,
  SelectValueForm,
} from '../../components/SelectOptions';
import { TextareaForm } from '../../components/TextareaForm';
import { ButtonForm } from '../../components/ButtonForm';
import { useEffect, useState } from 'react';
import { useAddResource } from '../../shared/hooks/useAddResource';
import { useResourceForm } from '../../shared/hooks/useResourceForm';
import toast from 'react-hot-toast';

export const FormResourceAdmin = () => {
  const { formState, setFormState } = useResourceForm();
  const { addResource, isLoading, error } = useAddResource();
  const [isFormValid, setIsFormValid] = useState(false);
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('user');
        if (token) {
            const user = JSON.parse(token);
            console.log(user);
            if (user.role === 'ADMIN_ROLE') {
                setAuthorized(true);
            } else {
                localStorage.removeItem('user');
                window.location.href = '/unauthorized';
            }

    } else {
      localStorage.removeItem('user');
      window.location.href = '/unauthorized';
    }
  }, []);
  useEffect(() => {
    if (!isLoading) {
      setFormState({
        imagen: { value: '', isValid: false, showError: false },
        titulo: { value: '', isValid: false, showError: false },
        tipo: { value: '', isValid: false, showError: false },
        contenido: { value: '', isValid: false, showError: false },
      });
    }
  }, [isLoading, error, setFormState]);
  useEffect(() => {
    const validateForm = () => {
      return (
        formState.imagen.value.trim() !== '',
        formState.titulo.value.trim() !== '',
        formState.tipo.value.trim() !== '' ,
        formState.contenido.value.trim() !== ''
      );
    };

    setIsFormValid(validateForm());
  }, [formState]);
  const handleSelectChange = (e) => {
    const { id, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [id]: {
        ...prevState[id],
        value,
      },
    }));
  };
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await addResource({
      imagen: formState.imagen.value,
      titulo: formState.titulo.value,
      tipo: formState.tipo.value,
      contenido: formState.contenido.value,
    });
    if (result && result.errors) {
      console.error('Server validation errors: ', result.errors);
      result.errors.forEach((error) => {
        const { path, msg } = error;
        setFormState((prevState) => ({
          ...prevState,
          [path]: {
            ...prevState[path],
          },
        }));
      });
      toast.error('Register failed');
    } else if(!isFormValid){
      toast.error('Tiene que llenar todos los campos!');
    }else{
      toast.success('Register succesful');
      setTimeout(()=>{
        window.location.reload();
    }, 2000)
    }
  };

  if (!authorized) {
    return <div>Loading...</div>;
  }
  
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full px-4 md:max-w-2xl md:mx-auto">
        <h2 className="text-3xl font-bold mb-6">Recursos</h2>
        <CardForm className="mx-auto">
          <CardContentForm className="grid gap-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <LabelForm htmlFor="image-url">URL de la imagen</LabelForm>
                <InputForm
                  id="imagen"
                  placeholder="Ingresa la URL de la imagen"
                  value={formState.imagen.value}
                  onChange={handleInputValueChange}
                  required
                />
              </div>
              <div className="space-y-3">
                <LabelForm htmlFor="title">Título</LabelForm>
                <InputForm
                  id="titulo"
                  placeholder="Ingresa el titulo"
                  value={formState.titulo.value}
                  onChange={handleInputValueChange}
                  required
                />
              </div>
            </div>
            <div className="space-y-3">
              <LabelForm htmlFor="type">Tipo</LabelForm>
              <SelectForm id="tipo" value={formState.tipo.value} onChange={handleSelectChange}>
                <SelectTriggerForm>
                  <SelectValueForm placeholder="Selecciona el tipo" />
                </SelectTriggerForm>
                <SelectContentForm >
                  <SelectItemForm value="juego">Juego</SelectItemForm>
                  <SelectItemForm value="lectura">Libro</SelectItemForm>
                </SelectContentForm>
              </SelectForm>
            </div>
            <div className="space-y-3">
              <LabelForm htmlFor="content">Contenido</LabelForm>
              <TextareaForm
                id="contenido"
                placeholder="Ingresa el contenido"
                value={formState.contenido.value}
                onChange={handleInputValueChange}
                className="min-h-[150px]"
                required
              />
            </div>
          </CardContentForm>
          <CardFooterForm className="flex flex-col-reverse md:flex-row md:justify-between">
            <ButtonForm
              variant="outline"
              className="mt-4 md:mt-0"
              onClick={() =>
                setFormState({
                  imagen: { value: ''},
                  titulo: { value: ''},
                  tipo: { value: ''},
                  contenido: { value: ''}
                })
              }
            >
              Limpiar
            </ButtonForm>
            <ButtonForm
              className="mt-4 md:mt-0"
              onClick={handleSubmit}
              disabled={isLoading || !isFormValid}
            >
              {isLoading ? 'Guardando...' : 'Guardar'}
            </ButtonForm>
          </CardFooterForm>
        </CardForm>
        {error && <div className="text-red-500">Error: {error.message}</div>}
      </div>
    </div>
  );
};
