import React, {  useState } from 'react';
import './App.css';
const App = () => {
  const [count, setCount] = useState(0);

  const incCount = () => {
    setCount(count + 1);
  };
  function solve(count){
    return count-1;
  }
  const decrCount = () => {
    if(count>0){
      setCount(count =>solve(count));
    }else{
      alert("Count cannot go below 0");
    }
  };

  return (
    <>
      <h1>Hello, Everyone</h1>
      <div className="card">
        <p>{count}</p>
        <div className='btn'>
          <button onClick={incCount}>Increment</button>
        <button onClick={decrCount}>Decrement</button>
        </div>
      </div>
    </>
  );
};

export default App;
