import React, { useState } from 'react'

export default function CounterWithState() {
    const[count,setCount] = useState(0);

    const increment= () => {
        setCount(count + 1);
    }

    const decrement = () => {
        setCount(count - 1)
    }

  return (
    <div>
      <h3>Counter with State</h3>
      <p>count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  )
}
