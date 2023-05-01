import { Link } from '@reach/router'
import React, { useReducer } from 'react'
export default function CounterWithReducer() {

    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 }
            case 'decrement':
                return { count: state.count - 1 }
            default:
                return { count: state.count }
        }
    }

    const [state, dispatch] = useReducer(reducer, { count: 0 })
    function handleIncrement() {
        dispatch({ type: 'increment' })
    }
    function handleDecrement() {
        dispatch({ type: 'decrement' })
    }
    return (
        <div>
            <Link to="/"> <button>Go Home</button></Link>

            <h3>Counter with Reducer</h3>
            <p>count: {state.count}</p>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )
}
