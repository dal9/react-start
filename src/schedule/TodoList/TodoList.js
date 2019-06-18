import React from 'react';
import styles from './TodoList.modules.scss';
import classnames from 'classnames/bind';
import TodoItem from "../TodoItem";

const cx = classnames.bind(styles);

export default function TodoList(props) {

    const {todo, onToggle, onRemove} = props;

    const todoItem = item => (<TodoItem key={item.id} done={item.done} onToggle={() => onToggle(item.id)} onRemove={() => onRemove(item.id)}>{item.text}</TodoItem>);

    return (
        <div>
            {todo.map(item => todoItem(item))}
        </div>
    );
}

