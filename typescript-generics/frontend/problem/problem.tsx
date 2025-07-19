import { useForm } from "./useForm";


export default function UserForm() {
  const { values, handleChange } = useForm({ name: '', age: 0 });

  return (
    <div>
      <input
        type="text"
        value={values.name}
        onChange={(e) => handleChange('name', e.target.value)}
      />
      <input
        type="number"
        value={values.age}
        onChange={(e) => handleChange('age', parseInt(e.target.value))}
      />
      <pre>{JSON.stringify(values)}</pre>
    </div>
  );
}
