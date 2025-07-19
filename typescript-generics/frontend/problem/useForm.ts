import { useState } from 'react';

export function useForm(initialValues: Record<string, any>) {
  const [values, setValues] = useState(initialValues);

  function handleChange(key: string, value: any) {
    setValues((prev) => ({
      ...prev,
      [key]: value,
    }));
  }

  return { values, handleChange };
}


