import logo from './logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Kick zô là có người yêu ^^.
        </p>
        <a
          className="App-link"
          href="https://www.facebook.com/caulacbotinhochce"
          target="_blank"
          rel="noopener noreferrer"
          onClick={()=>alert("Muốn có thiệt hẽeeeee")}
        >
          Kick iiiiii
        </a>
      </header>
    </div>
  );
}

export default App;
