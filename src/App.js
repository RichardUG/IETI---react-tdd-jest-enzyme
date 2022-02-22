import './App.css';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import Login from './pages/login';
function App() {
  return (
    <Router forceRefresh={true}>
      <Routes>
       <Route exact path='*' element={<Login/>}/>
      </Routes>
    </Router>
  );
}

export default App;
