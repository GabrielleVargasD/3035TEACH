import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState (1)

  function increment(){
    setCount(count + 1)
  }

  function decrease(){
    setCount(count - 1)
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Numero atual: {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrease}>-</button>
      </header>
    </div>
  );
}

export default App;
