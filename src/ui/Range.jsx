import useInput from "../hooks/useInput";

export default function Range({
  id,
  label,
  max,
  min = "0",
  addQuery,
  initialVal,
}) {
  const { input, handleChange } = useInput(initialVal || max, addQuery, id);

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <span>${input}</span>
      <input
        type="range"
        id={id}
        name={id}
        min={min}
        max={max}
        step="100"
        value={input}
        onChange={handleChange}
      />
      <span>{min}</span>
      <span>Max: ${max}</span>
    </div>
  );
}
