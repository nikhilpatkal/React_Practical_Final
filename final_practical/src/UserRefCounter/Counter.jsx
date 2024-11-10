import { useState } from "react";
import React, { useRef } from 'react';

function Counter() {
  // useRef to keep track of the click count
  const countRef = useRef(0);
  const [render, setRender] = useState(0);
  const handleClick = () => {
    countRef.current += 1; // Increment the count
    setRender(render + 1);
    console.log(`Button clicked ${countRef.current} times`);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Click Counter</h1>
      <button onClick={handleClick}>Click me</button>
      <p>Button clicked {countRef.current} times</p>
    </div>
  );
}

export default Counter;
