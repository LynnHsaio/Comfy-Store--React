import useInput from "../hooks/useInput";

export default function CheckBox({ name, label, initialVal, value, onChange }) {
  const { currentVal, handleChange } = useInput(
    initialVal,
    value,
    onChange,
    name
  );

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="checkbox"
        id={name}
        name={name}
        checked={currentVal}
        onChange={handleChange}
      />
    </div>
  );
}
