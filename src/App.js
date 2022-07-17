import './App.css';
import logo from './images/to-do logo.png';
import Task from './components/Task';


function App() {
  return (
    <div className='App'>
      <div className='logoContainer'>
        <img
          src={logo}
          className='logo'
          alt='The web logo'
        />
      </div>
      <div className='mainTaskList'>
        <h1>TO-DO</h1>
        <Task texto={'Aprender'} />
      </div>
    </div>
  );
}

export default App;
