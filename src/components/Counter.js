import React, {useState} from 'react'

const Counter = () => {

    const [count, setstate] = useState(1)
    const increment = () => {
        setstate(count + 1)
    }
    const decrement =() =>{
        setstate( count - 1)
    }

    return (
        <div>
            <h1>COUNTER-USING-REACT.JS</h1>
            <div className="container">
                <button className="increment" onClick ={increment}>+</button>
                <span className="spanTag">{count}</span>
                <button className="decrement" onClick ={decrement}>-</button>
            </div>
        </div>
    )
}

export default Counter
