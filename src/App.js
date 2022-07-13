import './App.css';
import logo from './images/to-do logo.png'


function App() {
  return (
    <div className="App">
      <div className="logoContainer">
        <img
          src={logo}
          className="logo"
          alt="The web logo"
        />
      </div>
    </div>
  );
}

export default App;
