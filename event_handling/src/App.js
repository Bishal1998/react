import './App.css';
import { useState } from "react";

const App = () => {

  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCounter((prevCount) => prevCount+1)}>+</button>
      <p>{counter}</p>
      <button onClick={() => setCounter((prevCount) => prevCount-1)}>-</button>

    </div>
  );
}

export default App;
