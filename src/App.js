import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginPage from './components/LoginPage';
import logo from './database_icon.png';

function App() {
  return (
    <div className="App">
      <h1 className="App-header">
          Welcome to the Dataset Registry
      </h1>
      <LoginPage logo={logo}/>
    </div>
  );
}

export default App;
