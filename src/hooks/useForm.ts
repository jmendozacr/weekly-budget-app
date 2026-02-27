import { useState } from 'react';

export const useForm = <T extends Record<string, any>>(
  initialValues: T,
  validationFn?: (values: T) => boolean
) => {
  const [values, setValues] = useState<T>(initialValues);
  const [error, setError] = useState<boolean>(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setValues({
      ...values,
      [name]: type === 'number' ? parseInt(value, 10) || 0 : value
    });
  };

  const handleSubmit = (e: React.FormEvent, submitFn: (values: T) => void) => {
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