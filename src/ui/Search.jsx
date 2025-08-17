import useInput from "../hooks/useInput";

export default function Search({ name, label, initialVal, value, onChange }) {
  const { currentVal, handleChange } = useInput(initialVal, value, onChange);

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <input
        type="text"
        id={name}
        name={name}
        value={currentVal}
        onChange={handleChange}
      />
    </div>
  );
}
