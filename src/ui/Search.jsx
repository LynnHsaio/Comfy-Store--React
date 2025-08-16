import useInput from "../hooks/useInput";

export default function Search({ id, label, addQuery, initialVal }) {
  const { input, handleChange } = useInput(initialVal || "", addQuery, id);

  return (
    <div>
      <label htmlFor="search">{label}</label>
      <input
        type="text"
        id="search"
        name={id}
        value={input}
        onChange={handleChange}
      />
    </div>
  );
}
