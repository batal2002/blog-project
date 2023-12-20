import {useState} from "react";
import s from './Counter.module.scss'
const Counter = () => {
    const [count, setCount] = useState(0)

    const increment = () => {
        setCount(count + 1)
    }

    return (
        <div>
            <div className={s.count}>{count}</div>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default Counter;