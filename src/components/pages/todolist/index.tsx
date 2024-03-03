import { useState } from 'react'
import styles from './style.module.scss'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)
const todoListData = [
    {
        name: '學習 Component',
        done: false
    },
    {
        name: '學習 useState',
        done: false
    },
    {
        name: '學習 useEffect',
        done: false
    },
    {
        name: '學習 Props',
        done: false
    },
    {
        name: '學習 next.js',
        done: false
    },
    {
        name: '學習 Typescript',
        done: false
    },
    {
        name: '學習 Node.JS',
        done: false
    },
    {
        name: '學習 RestAPI',
        done: false
    },
]

const TodoListComponent = () => {

    const [todoList, setTodoList] = useState(todoListData)
    const [newTodo, setNewTodo] = useState('')
    return (
        <div className={cx('todo-list')}>
            <p className={cx('todo-list-title')}>Junior Frontend Learning Todo List</p>
            {/* 加上一個 Input 與 Button */}
            <div>
                <div className={cx('todo-list-input')}>
                    <input type="text" name="todo" id="todo"
                        placeholder="Enter your todo"
                        value={newTodo}
                        onChange={(event) => setNewTodo(event.target.value)} />
                    <button className={cx('todo-list-button', 'create')} onClick={() => {
                        setTodoList([{ name: newTodo, done: false }, ...todoList])
                    }}>
                        Add
                    </button>
                </div>
            </div>
            {/* TodoList */}
            <div >
                {
                    todoList.map((todo, index) => {
                        return (
                            <div key={index} className={cx('todo-list-item')}>
                                <input type="checkbox" name="todo" id="todo" />
                                <label htmlFor="todo">{todo.name}</label>
                                <button
                                    className={cx('todo-list-item-button', 'delete')}
                                    onClick={() => {
                                        console.log(todoList.filter((todo, i) => todo.name !== todo.name))
                                        setTodoList(todoList.filter((oldTodo, i) => oldTodo.name !== todo.name))
                                    }
                                    }>
                                    delete
                                </button>
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}
export default TodoListComponent