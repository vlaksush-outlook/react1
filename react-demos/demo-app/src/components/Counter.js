import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './action'

export default function Counter() {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch();
    return (
        <div>
            <h3>Counter with Redux</h3>
            <p>count: {count}</p>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
        </div>
    )
}
