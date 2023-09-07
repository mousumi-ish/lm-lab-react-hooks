import { useState, useRef } from "react";
import {} from "react";
export const CountRenders = () => {
  const [value, setValue] = useState("");
  //const count = 1;
  const ref = useRef(1);

  function handleClick(item: string) {
    ref.current = ref.current + 1;
    setValue(item);
  }
  return (
    <>
      <h2>useRef</h2>

      <input
        value={value}
        type="text"
        onChange={(e) => handleClick(e.target.value)}
      />

      <p>{value}</p>
      <p>I have rendered {ref.current} times</p>
    </>
  );
};
