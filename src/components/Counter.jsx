import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount, incrementAsync } from '../redux/features/counterSlice';

const Counter = () => {
    const dispatch = useDispatch();

    const counter = useSelector(state => state.counter);
    console.log(counter, "counterrr")

    const { value } = useSelector(state => state.counter);
    // console.log(value)
    const [incrementAmount, setIncrementAmount] = useState('2');

    return (
        <div>
            <h1>Counter</h1>
            <h2>{value}</h2>

            <div style={{ display: "flex", justifyContent: "center", gap: "10px", alignItems: "center" }} >
                <button onClick={() => dispatch(increment())}>Increment</button>
                <button onClick={() => dispatch(decrement())}>Decrement</button>

            </div>

            <h3>Add Amount</h3>
            <div style={{ display: "flex", justifyContent: "center", gap: "10px", alignItems: "center" }} >
                <input
                    type="text"
                    value={incrementAmount}
                    onChange={e => setIncrementAmount(e.target.value)} />

                <button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))} >
                    Add Amount
                </button>
                <button onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}>
                    Add Amount in Async
                </button>
            </div>

        </div>
    )
}

export default Counter