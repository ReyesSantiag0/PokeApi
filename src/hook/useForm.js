import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  //Resetiamos
  const onResetForm = () => {
    setFormState(initialForm);
  };

  //Retornamos
  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm,
  };
};
