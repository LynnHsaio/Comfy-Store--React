import { useEffect } from "react";
import { BsMoonFill, BsSunFill } from "react-icons/bs";
import useLocalStorage from "../hooks/useLocalStorage";

export default function ThemeToogle() {
  const [isDarkMode, setIsDarkMode] = useLocalStorage(
    "isDarkMode",
    window.matchMedia("(prefers-color-scheme: dark)").matches
  );

  function handleDarkMode() {
    setIsDarkMode((curState) => !curState);
  }

  useEffect(
    function () {
      const theme = isDarkMode ? "dracula" : "winter";

      document.documentElement.setAttribute("data-theme", theme);
    },
    [isDarkMode]
  );

  return (
    <div onClick={handleDarkMode}>
      {isDarkMode ? <BsSunFill /> : <BsMoonFill />}
    </div>
  );
}
