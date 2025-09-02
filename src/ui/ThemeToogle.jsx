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
      const addThemeClass = isDarkMode ? "dracula" : "winter";
      const removeThemeClass = !isDarkMode ? "dracula" : "winter";
      const htmlElement = document.querySelector("html");

      htmlElement.classList.add(addThemeClass);
      htmlElement.classList.remove(removeThemeClass);
    },
    [isDarkMode]
  );

  return (
    <div onClick={handleDarkMode}>
      {isDarkMode ? <BsSunFill /> : <BsMoonFill />}
    </div>
  );
}
