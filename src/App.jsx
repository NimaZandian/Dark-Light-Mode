import { useSelector } from "react-redux";
import ThemeToggle from "./components/ThemeToggle";
import Users from "./components/Users";

const App = () => {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div className={`app ${theme}`}>
      <h1>Nima Z.</h1>
      <ThemeToggle />
      <Users />
    </div>
  );
};

export default App;
