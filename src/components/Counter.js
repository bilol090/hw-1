import { useState } from "react";


function Counter() {
  const [state, setState] = useState(1);

  function add() {
    if (state < 50000) {
      setState(state => state + 1);
    }
  }

  function remove() {
    if (state > 0) {
      setState(state => state - 1);
    }
  }

  return (
    <div className="block">
      <h1 className="row">{state}</h1>
      <button className="btn" onClick={add}>+</button>
      <button className="btn" onClick={remove}>-</button>
    </div>
  );
}

export default Counter;
