import useInput from "../hooks/useInput";

export default function Select({ id, label, options, addQuery, initialVal }) {
  const { input, handleChange } = useInput(
    initialVal || options[0],
    addQuery,
    id
  );

  return (
    <div>
      <label htmlFor={id}>{label}</label>

      <select name={id} id={id} value={input} onChange={handleChange}>
        {options.map((item) => (
          <option value={item} key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}
