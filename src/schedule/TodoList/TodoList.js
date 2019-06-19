import React from 'react';
import styles from './TodoList.modules.scss';
import classnames from 'classnames/bind';
import TodoItem from "../TodoItem";

const cx = classnames.bind(styles);

export default function TodoList(props) {

    const {todo, onToggle, onRemove} = props;

    const todoItem = item => (<TodoItem key={item.get('id')} done={item.get('done')} onToggle={() => onToggle(item.get('id'))} onRemove={() => onRemove(item.get('id'))}>{item.get('text')}</TodoItem>);

    return (
        <div>
            {todo.map(item => todoItem(item))}
        </div>
    );
}

