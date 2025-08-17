import { useState } from "react";

export default function useInput(initialVal, value, onChange, name) {
  const [input, setInput] = useState(initialVal);

  const isControlled = value !== undefined;
  const currentVal = isControlled ? value : input;

  function handleChange(e) {
    if (isControlled) {
      onChange?.(name, e.target.value);
    } else {
      setInput(e.target.value);
    }
  }

  return { currentVal, handleChange };
}
