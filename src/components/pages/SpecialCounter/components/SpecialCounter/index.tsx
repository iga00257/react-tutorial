// write me a counter component for useState tutorial
import classNames from "classnames/bind"
import styles from "./style.module.scss"
const cx = classNames.bind(styles)


// 初始化 state 空陣列
let state: any[] = [];
// 初始化 setters 空陣列
let setters: any[] = [];

// 初始化指標值 0
let cursor = 0;

// 首次渲染
let firstRun = true;



function createSetter(cursor: number) {
    return function setterWithCursor(newVal: any) {
        state[cursor] = newVal;
    };
}

// 實作 useState
export function useState(initVal: any) {
    // 只有首次渲染會進入以下程式碼
    // state push 進 state 的陣列當中
    // setters push 進 setters 的陣列當中
    if (firstRun) {
        state.push(initVal);

        setters.push(createSetter(cursor));
        // 執行完之後，將首次渲染值改為 false
        firstRun = cursor < 2;
    }

    // 透過對應紀錄好的順序，可以取出該 setter 在陣列中的值
    const setter = setters[cursor];

    // 透過對應紀錄好的順序，可以取出該 state 在陣列中的值
    const value = state[cursor];

    // 指標值 +1
    cursor++;
    // 最後回傳 state 值和 setter 函式
    return [value, setter];
}



const SpecialCounterComponent = (props: any) => {
    const { handleClick } = props
    const [firstName, setFirstName] = useState("Rudi"); // 指標值: 0
    const [lastName, setLastName] = useState("Yardley"); // 指標值: 1
    return (
        <div className={cx('counter')}>
            <button className={cx('counter-value-button', 'minus')} onClick={() => {
                setFirstName("Richard")
                console.log('state:', state)
            }}>-</button>
            <h1 className={cx('counter-value')}>{firstName}</h1>
            <h1 className={cx('counter-value')}>{lastName}</h1>
            <button className={cx('counter-value-button', 'plus')} onClick={() => {
                setLastName("Fred")
                console.log('state:', state)
            }}>+</button>
        </div>

    )
}


export default SpecialCounterComponent