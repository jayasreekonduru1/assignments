import React,{useState} from "react";
import './Counter.css'

const Counter=()=>{
    const [count, setCount] = useState(0)

    const handleIncrement=()=>{
        setCount((prev)=>prev+1)
    }

    const handleDecrement=()=>{
        setCount((prev)=>prev-1)
    }
    const handleReset=()=>{
        setCount(0)
    }
    return(
        <div>
            <p>{count}</p>
            <div className="counter">
                <button onClick={handleIncrement}>+</button>
                <button onClick={handleReset}>Reset</button>
                <button onClick={handleDecrement}>-</button>
            </div>
            
        </div>
    )
}

export default Counter;