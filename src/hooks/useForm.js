import { useState } from 'react';

export const useForm = (initialValues = {}, validationFn) => {
  const [values, setValues] = useState(initialValues);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    const { name, value, type } = e.target;
    setValues({
      ...values,
      [name]: type === 'number' ? parseInt(value, 10) || 0 : value
    });
  };

  const handleSubmit = (e, submitFn) => {
    e.preventDefault();
    if (validationFn && !validationFn(values)) {
      setError(true);
      return;
    }
    submitFn(values);
    setError(false);
    setValues(initialValues);
  };

  const reset = () => {
    setValues(initialValues);
    setError(false);
  };

  return { values, error, handleChange, handleSubmit, reset };
};