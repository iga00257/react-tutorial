import classNames from 'classnames/bind'
import { useState } from 'react'

// component
import TodoItem from './components/TodoItem'

// style
import styles from './style.module.scss'

export type TTodoItem = {
    id: number,
    name: string,
    done: boolean,
}

const cx = classNames.bind(styles)
const todoListData = [
    {
        id: 1,
        name: '學習 Component',
        done: false
    },
    {
        id: 2,
        name: '學習 useState',
        done: false
    },
    {
        id: 3,
        name: '學習 useEffect',
        done: false
    },
    {
        id: 4,
        name: '學習 Props',
        done: false
    },
    {
        id: 5,
        name: '學習 next.js',
        done: false
    },
    {
        id: 6,
        name: '學習 Typescript',
        done: false
    },
    {
        id: 7,
        name: '學習 Node.JS',
        done: false
    },
    {
        id: 8,
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
                        setTodoList([{ id: Math.random(), name: newTodo, done: false }, ...todoList])
                    }}>
                        Add
                    </button>
                </div>
            </div>
            {/* TodoList */}
            <div>
                {
                    todoList.map((todo, index) => {
                        return (
                            <TodoItem todo={todo} key={todo.id} setTodoList={setTodoList} />
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}
export default TodoListComponent