import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <form>
          <label>Enter your name: </label>
          <br></br>
            <input type="text" id="name"></input>
          <br></br>
          <label>What are you doing today? </label>
          <br></br>
            <input type="text" id="doing"></input>
          <br></br>
        </form>
          <button onClick={clickMe}>Confirm</button>
      </header>
      <footer>
        <p>
        This sits at the bottom of the page for your convenience.
        </p>
      </footer>
    </div>
  );
  function clickMe() {
    alert("You clicked me.");
  }
}

export default App;
