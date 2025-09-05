import useInput from "../hooks/useInput";
import styles from "./Select.module.scss";

export default function Select({
  name,
  label,
  options,
  initialVal,
  value,
  onChange,
  layout = "column",
}) {
  const { currentVal, handleChange } = useInput(initialVal, value, onChange);

  return (
    <div className={`${styles.select} ${styles[layout]}`}>
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
