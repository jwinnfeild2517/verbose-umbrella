import './App.css';

function App() {
  return (
    <div className="App">
      <div className="counter-container">
        <p>Seeing you in:</p>
          <p>
            <span id="days"></span>
            <span id="hours"></span>
            <span id="mins"></span>
            <span id="secs"></span>
            <span id="end"></span>
          </p>
      </div>
    </div>
  );
}

export default App;
