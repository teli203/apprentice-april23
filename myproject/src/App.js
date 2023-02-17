import logo from './logo.svg';
import './App.css';
import Greeting from './components/Greeting';
import Message from './components/Message';
function App() {
  return (
    <div className="App">
      <Greeting/>
      <Message/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is my react project to show case my skills.
          Lets Go!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn more about React with me 
        </a>
      </header>
    </div>
  );
}

export default App;
