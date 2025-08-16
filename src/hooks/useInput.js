import { useEffect, useState } from "react";

export default function useInput(initVal, handleFunc, id) {
  const [input, setInput] = useState(initVal);

  function handleChange(e) {
    setInput(e.target.value);
    handleFunc?.(id, e.target.value);
  }

  // 如果初始值不一樣的話，就重新指定value的值
  useEffect(
    function () {
      setInput(initVal);
    },
    [initVal]
  );

  return { input, handleChange };
}
