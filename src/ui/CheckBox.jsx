import useInput from "../hooks/useInput";

export default function CheckBox({ id, label, addQuery, initialVal }) {
  const { input, handleChange } = useInput(initialVal || false, addQuery, id);

  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type="checkbox"
        id={id}
        name={id}
        checked={input}
        onChange={handleChange}
      />
    </div>
  );
}
