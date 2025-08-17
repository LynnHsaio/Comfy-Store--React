import useInput from "../hooks/useInput";

export default function Range({
  name,
  label,
  max,
  min = "0",
  initialVal,
  value,
  onChange,
}) {
  const { currentVal, handleChange } = useInput(initialVal, value, onChange);

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <span>${currentVal}</span>
      <input
        type="range"
        id={name}
        name={name}
        min={min}
        max={max}
        step="100"
        value={currentVal}
        onChange={handleChange}
      />
      <span>{min}</span>
      <span>Max: ${max}</span>
    </div>
  );
}
