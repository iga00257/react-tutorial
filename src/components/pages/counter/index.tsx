// write me a counter component for useState tutorial
import { useState } from "react"
import classNames from "classnames/bind"
import styles from "./style.module.scss"
import { useEffect } from "react"
const cx = classNames.bind(styles)

const CounterComponent = () => {
    const [count, setCount] = useState(1)
    return (
        <div className={cx('counter')}>
            <button className={cx('counter-value-button', 'minus')} onClick={() => {
                setCount(count - 1)
            }}>-</button>
            <h1 className={cx('counter-value')}>{count}</h1>
            <button className={cx('counter-value-button', 'plus')} onClick={() => setCount(count + 1)}>+</button>
        </div>

    )
}
export default CounterComponent