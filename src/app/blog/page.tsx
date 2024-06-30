"use client";

import React, { useState } from 'react';

export default function Counter() {
  const [ count, setCount ] = useState( 0 );

  const incrementCount = () => setCount( count + 1 );
  const decrementCount = () => setCount( Math.max( 0, count - 1 ) ); // Prevent negative values

  return (
    <div >
      <h1 className="text-black">Counter</h1>
      <p>Current count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
      <button onClick={decrementCount}>Decrement</button>
    </div>
  );
}
