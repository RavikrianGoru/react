import React, { useState } from 'react'

const ClickEvent = () => {

    const [num, setNum] = useState(0);
    const increment = () => {
        setNum(num + 1);
    }
    const decrement = () => {
        if (num > 0) {
            setNum(num - 1);
        }
    }
    const reset = () => {
        setNum(0);
    }

    return (
        <div>
            <h1>{num}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </div>
    )
}

export default ClickEvent
