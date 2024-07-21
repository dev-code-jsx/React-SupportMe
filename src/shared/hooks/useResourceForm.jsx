import React from 'react';
import { useState } from 'react';
export const useResourceForm = () => {
  const [formState, setFormState] = useState({
    imagen: { value: '' },
    titulo: { value: '' },
    tipo: { value: '' },
    contenido: { value: '' },
  });
  const handleInputValueChange = (value, field) => {
    setFormState((prevState) => ({
      ...prevState,
      [field]: { ...prevState[(field, value)] },
    }));
  };

  return {
    formState,
    handleInputValueChange,
    setFormState,
  };
};
