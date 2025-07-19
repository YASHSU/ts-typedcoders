import { useState } from 'react';

type UseFormReturn<T> = {
  values: T;
  handleChange: <K extends keyof T>(key: K, value: T[K]) => void;
};

export function useForm<T>(initialValues: T): UseFormReturn<T> {
  const [values, setValues] = useState<T>(initialValues);

  function handleChange<K extends keyof T>(key: K, value: T[K]) {
    setValues((prev: T) => ({
      ...prev,
      [key]: value,
    }));
  }

  return { values, handleChange };
}

