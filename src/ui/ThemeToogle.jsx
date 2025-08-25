import { useState } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";

export default function ThemeToogle() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function handleDarkMode() {
    setIsDarkMode((curState) => !curState);
  }

  return (
    <div onClick={handleDarkMode}>
      {isDarkMode ? <BsSunFill /> : <BsMoonFill />}
    </div>
  );
}
