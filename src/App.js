import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Tasks from "./pages/tasks";
import { useReducer } from "react";
import { themeReducer, initialState } from "./utils";
import { ThemeContext } from "./ThemeContext";
import { Button } from "@material-ui/core";
import Helmet from "react-helmet";
//import ImageButton from 'react-image-button';

function App() {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  const bg = state.isDarkMode
    ? "body {background-color: rgb(43, 43, 43);}"
    : "body {background-color: rgb(177, 177, 177);}";
  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      <Helmet>
        <style>{bg}</style>
      </Helmet>
      <Button
        onClick={() => {
          if (state.isDarkMode) {
            dispatch("SET_LIGHT_MODE");
          } else {
            dispatch("SET_DARK_MODE");
          }
        }}
      >
        Change Theme
      </Button>
      <img src="https://github.com/RichardUG/IETI---react-state-management-pwa/blob/master/img/luna.png?raw=true" alt="" />

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
