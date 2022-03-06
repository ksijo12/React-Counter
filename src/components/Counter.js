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
        <div className="container">
            <button className="increment" onClick ={increment}>+</button>
            <span className="spanTag">{count}</span>
            <button className="decrement" onClick ={decrement}>-</button>
        </div>
    )
}

export default Counter
