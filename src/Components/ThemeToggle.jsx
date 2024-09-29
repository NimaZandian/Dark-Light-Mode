import { useDispatch, useSelector } from "react-redux";
import {
  setLightTheme,
  setDarkTheme,
  setSemiDarkTheme,
} from "../feature/themeSlice";

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const handleThemeChange = (newTheme) => {
    if (newTheme === "light") {
      dispatch(setLightTheme());
    } else if (newTheme === "dark") {
      dispatch(setDarkTheme());
    } else if (newTheme === "semi-dark") {
      dispatch(setSemiDarkTheme());
    }
  };

  return (
    <div>
      <h3>Current Theme: {theme}</h3>
      <button onClick={() => handleThemeChange("light")}>Light</button>
      <button onClick={() => handleThemeChange("dark")}>Dark</button>
      <button onClick={() => handleThemeChange("semi-dark")}>Semi-Dark</button>
    </div>
  );
};

export default ThemeToggle;
