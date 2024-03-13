// write me a counter component for useState tutorial
import classNames from "classnames/bind"
import styles from "./style.module.scss"
import { useState } from "react"
import SpecialCounterComponent from "./components/SpecialCounter"
const cx = classNames.bind(styles)



const SpecialCounterComponentWrapper = () => {
    const [rerenderTrigger, setRerenderTrigger] = useState(false)
    return (
        <div className={cx('counter')}>
            <SpecialCounterComponent handleClick={() => setRerenderTrigger(!rerenderTrigger)} />
        </div>

    )
}


export default SpecialCounterComponentWrapper