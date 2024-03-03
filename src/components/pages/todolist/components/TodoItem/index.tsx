import styles from './style.module.scss'
import classNames from 'classnames/bind';
const cx = classNames.bind(styles);

interface TodoItemProps {
    todo: {
        name: string,
        done: boolean
    },
    onRemove: () => void
}

const TodoItem = ({ todo, onRemove }: TodoItemProps) => {
    return (
        <div className={cx('todo-list-item')}>
            <input type="checkbox" name="todo" id="todo" />
            <label htmlFor="todo">{todo.name}</label>
            <button
                className={cx('todo-list-item-button', 'delete')}
                onClick={() => {
                    onRemove()
                }
                }>
                delete
            </button>
        </div>
    );
}

export default TodoItem;