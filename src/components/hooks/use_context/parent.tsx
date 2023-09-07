import { createContext, useState } from "react";
import { Child1 } from "./child_1";
import { Child2 } from "./child_2";
export const ThemeContext = createContext<Theme>({
  backgroundColor: "",
  color: "",
  padding: "",
  margin: "",
});
interface Theme {
  backgroundColor: string;
  color: string;
  padding: string;
  margin: string;
}
export const Parent = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  const toggleTheme = () => {
    setDarkTheme((prevDarkTheme) => !prevDarkTheme);
  };

  return (
    <ThemeContext.Provider
      value={{
        backgroundColor: darkTheme ? "#333" : "#CCC",
        color: darkTheme ? "white" : "#333",
        padding: "2rem",
        margin: "2rem",
      }}
    >
      <div className="section">
        <h2>useContext</h2>
        <button onClick={toggleTheme}>Toggle Theme</button>
        <Child1 />
        <Child2 />
      </div>
    </ThemeContext.Provider>
  );
};
