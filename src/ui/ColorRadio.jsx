import useInput from "../hooks/useInput";
import styles from "./ColorRadio.module.scss";

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
    <fieldset className={styles.colorRadio}>
      <legend className="font-medium">{label}</legend>

      <div className={styles.colorsContainer}>
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
              className={`${styles.color} ${
                color === currentVal ? styles.selected : ""
              }`}
              style={{
                backgroundColor: color,
              }}
            ></label>
          </span>
        ))}
      </div>
    </fieldset>
  );
}

// border: color === currentVal ? "solid 2px red" : "none",
