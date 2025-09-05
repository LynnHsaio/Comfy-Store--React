import useInput from "../hooks/useInput";
import { formatCurrency } from "../utils/helpers";

import styles from "./Range.module.scss";

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
    <div className={styles.range}>
      <label htmlFor={name}>
        <span>{label}</span>
        <span>{formatCurrency(currentVal)}</span>
      </label>
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
      <p className="text-sm font-medium ">
        <span>{formatCurrency(min)}</span>
        <span>Max: {formatCurrency(max)}</span>
      </p>
    </div>
  );
}
