import useInput from "../hooks/useInput";

export default function Select({
  name,
  label,
  options,
  initialVal,
  value,
  onChange,
}) {
  const { currentVal, handleChange } = useInput(initialVal, value, onChange);

  return (
    <div>
      <label htmlFor={name}>{label}</label>

      <select name={name} id={name} value={currentVal} onChange={handleChange}>
        {options.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
