import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import logo from './database_icon.png';
import {
  Routes,
  Route
} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path='/' element={< LoginPage logo= {logo} />}></Route> 
        <Route exact path='/register' element={< RegisterPage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
