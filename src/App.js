import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Tasks from "./pages/tasks";
import { useReducer, useState } from "react";
import { themeReducer, initialState } from "./utils";
import { ThemeContext } from "./ThemeContext";
import { Button } from "@material-ui/core";
import Helmet from "react-helmet";
import Sol from "./img/sol.png";
import Luna from "./img/luna.png";
function App() {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  const bg = state.isDarkMode
    ? "body {background-color: rgb(43, 43, 43);}"
    : "body {background-color: rgb(177, 177, 177);}";
  const [imagen, setImagen] = useState(Luna);
  const [mode, setMode] = useState("Change to dark mode");
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <Helmet>
        <style>{bg}</style>
      </Helmet>
      <Button
        style={{
          background: `${
            state.isDarkMode ? "rgb(177, 177, 177)" : "rgb(43, 43, 43)"
          }`,
        }}
        onClick={() => {
          if (state.isDarkMode) {
            dispatch("SET_LIGHT_MODE");
            setImagen(Sol);
            setMode("Change to light mode");
          } else {
            dispatch("SET_DARK_MODE");
            setImagen(Luna);
            setMode("Change to dark mode");
          }
        }}
      >
        <img
          className="boton"
          src={imagen}
          alt="boton"
          width={40}
          height={40}
        />
        <div className={`${state.isDarkMode ? "light" : "dark"}`}>{mode}</div>
      </Button>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/tasks" element={<Tasks />} />
        </Routes>
      </Router>
    </ThemeContext.Provider>
  );
}
export default App;
