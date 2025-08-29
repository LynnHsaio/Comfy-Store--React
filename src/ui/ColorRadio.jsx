import useInput from "../hooks/useInput";

export default function ColorRadio({
  name,
  label,
  options,
  initialVal,
  value,
  onChange,
}) {
  const { currentVal, handleChange } = useInput(initialVal, value, onChange);

  return (
    <fieldset>
      <legend>{label}</legend>

      {options.map((color) => (
        <span key={color}>
          <input
            type="radio"
            name={name}
            id={color}
            value={color}
            style={{ appearance: "none" }}
            checked={color === currentVal}
            onChange={handleChange}
          />
          <label
            htmlFor={color}
            style={{
              backgroundColor: color,
              padding: "1rem",
              border: color === currentVal ? "solid 2px red" : "none",
            }}
          ></label>
        </span>
      ))}
    </fieldset>
  );
}
