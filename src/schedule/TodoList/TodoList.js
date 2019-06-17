import React, {useMemo} from 'react';
import styles from './TodoList.modules.scss';
import classnames from 'classnames/bind';
import TodoItem from "../TodoItem";

const cx = classnames.bind(styles);

export default function TodoList(props) {

    const {todos, onToggle, onRemove} = props;

    const todoList = todos.map(
        todo => (<TodoItem key={todo.id} done={todo.done} onToggle={() => onToggle(todo.id)} onRemove={() => onRemove(todo.id)}>{todo.text}</TodoItem>)
    );

    return (
        <div>
            {todoList}
        </div>
    );
}

