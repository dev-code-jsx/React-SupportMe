import { CardForm } from '../../components/CardForm';
import { CardContentForm } from '../../components/CardContentForm';
import { CardFooterForm } from '../../components/CardFooterForm';
import { LabelForm } from '../../components/LabelForm';
import { InputForm } from '../../components/InputForm';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import {
  SelectForm,
  SelectTriggerForm,
  SelectContentForm,
  SelectItemForm,
  SelectValueForm,
} from '../../components/SelectOptions';
import { TextareaForm } from '../../components/TextareaForm';
import { ButtonForm } from '../../components/ButtonForm';
import { useGetRecursoById } from '../../shared/hooks/useGetRecursoById';
import { useUpdateResource } from '../../shared/hooks/useUpdateResource';
import toast from 'react-hot-toast';
import { useEffect, useState } from 'react';
import { useEditResourceForm } from '../../shared/hooks/useEditResourceForm';
export const FormResourceAdminEdit = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const { recurso, loading, error } = useGetRecursoById(id);
  const { formState, setFormState } = useEditResourceForm();
  const { actualizarRecurso, loadingResource } = useUpdateResource();
  const [authorized, setAuthorized] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('user');
    if (token) {
      const user = JSON.parse(token);

      if (user.role === 'ADMIN_ROLE') {
        setAuthorized(true);
      }
    } else {
      localStorage.removeItem('user');
      window.location.href = '/unauthorized';
    }
  }, []);

  useEffect(() => {
    if (recurso) {
      setFormState({
        imagen: { value: recurso.imagen, isValid: false, showError: false },
        titulo: { value: recurso.titulo, isValid: false, showError: false },
        tipo: { value: recurso.tipo, isValid: false, showError: false },
        contenido: { value: recurso.contenido, isValid: false, showError: false },
      });
    }
  }, [recurso, setFormState]);

  useEffect(() => {
    if (!loadingResource) {
      setFormState((prevState) => ({
        ...prevState,
        imagen: { value: '', isValid: false, showError: false },
        titulo: { value: '', isValid: false, showError: false },
        tipo: { value: '', isValid: false, showError: false },
        contenido: { value: '', isValid: false, showError: false },
      }));
    }
  }, [loadingResource, setFormState]);
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
    const updatedData = {
      imagen: formState.imagen.value,
      titulo: formState.titulo.value,
      tipo: formState.tipo.value,
      contenido: formState.contenido.value,
    };
    const result = await actualizarRecurso(id, updatedData);
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
      toast.error('Couldn\'t update the resource');
    } else {
      toast.success('Resource updated');
    }
    navigate("/principal/admin/adminRecursos")
  };

  if (!authorized) {
    return <div>Cargando...</div>;
  }
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full px-4 md:max-w-2xl md:mx-auto">
        <h2 className="text-3xl font-bold mb-6">Editar Recursos</h2>
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
                />
              </div>
              <div className="space-y-3">
                <LabelForm htmlFor="title">Título</LabelForm>
                <InputForm
                  id="titulo"
                  placeholder="Ingresa el título"
                  value={formState.titulo.value}
                  onChange={handleInputValueChange}
                />
              </div>
            </div>
            <div className="space-y-3">
              <LabelForm htmlFor="type">Tipo</LabelForm>
              <SelectForm
                id="tipo"
                value={formState.tipo.value}
                onChange={handleSelectChange}
              >
                <SelectTriggerForm>
                  <SelectValueForm>{formState.tipo.value || 'Selecciona una opción'}</SelectValueForm>
                </SelectTriggerForm>
                <SelectContentForm>
                  <SelectItemForm value="article">Artículo</SelectItemForm>
                  <SelectItemForm value="video">Video</SelectItemForm>
                  <SelectItemForm value="book">Libro</SelectItemForm>
                  <SelectItemForm value="other">Otro</SelectItemForm>
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
              />
            </div>
          </CardContentForm>
          <CardFooterForm className="flex flex-col-reverse md:flex-row md:justify-between">
            <Link to="/principal/admin/adminRecursos" className="t-4 md:mt-0">
              Cancelar
            </Link>
            <ButtonForm
              className="mt-4 md:mt-0"
              onClick={handleSubmit}
              disabled={loadingResource}
            >
              {loadingResource ? 'Actualizando...' : 'Actualizar'}
            </ButtonForm>
          </CardFooterForm>
        </CardForm>
        {error && <div className="text-red-500">Error: {error.message}</div>}
      </div>
    </div>
  );
};