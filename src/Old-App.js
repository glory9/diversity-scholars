import React from 'react';
// import logo from './logo.svg';
import logo from './new_logo.jpeg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Mad oh!</h1>
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>Welcome to HBCU Diversity Scholars</p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
