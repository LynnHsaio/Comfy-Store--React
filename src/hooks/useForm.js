import { useState } from "react";

export default function useForm(initialVal) {
  const [form, setForm] = useState(initialVal);

  function handleChange(e) {
    const { name, value } = e.target;
    const convertedValue = Number(value) || value;

    setForm((curState) => ({ ...curState, [name]: convertedValue }));
  }

  function resetForm() {
    setForm(initialVal);
  }

  return { form, setForm, resetForm, handleChange };
}
