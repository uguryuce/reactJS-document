import React from 'react';
import Counter from "./components/Counter"
import IncreaseByTwoCounter from './components/IncreaseByTwoCounter';
import DecreaseCounter from "./components/DecreaseCounter";
import IncreaseCounter from "./components/IncreaseCounter"

function App() {
  return (
    <div>
      <Counter/>
      <IncreaseCounter/>
      <DecreaseCounter/>
      <IncreaseByTwoCounter/>
      
    </div>
  );
}

export default App;
