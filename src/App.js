import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Tasks from "./pages/tasks";
function App() {
  const a = 5;
  console.log(a);
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/tasks" element={<Tasks />} />
      </Routes>
    </Router>
  );
}

export default App;
