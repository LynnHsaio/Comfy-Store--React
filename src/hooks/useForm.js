import { useState } from "react";

export default function useForm(initialVal) {
  const [form, setForm] = useState(initialVal);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((curState) => ({ ...curState, [name]: value }));
  }

  function resetForm() {
    setForm(initialVal);
  }

  return { form, setForm, resetForm, handleChange };
}
