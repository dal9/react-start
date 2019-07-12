import React from 'react';
import {useLocalStore, useObserver} from "mobx-react-lite";
import classnames from 'classnames/bind'


const cx = classnames.bind();

export default function SmartTodo() {

    const todo = useLocalStore(() => ({
        title : 'Click to toggle',
        done : false,
        toggle() {
            todo.done = !todo.done
        },
        get emoji() {
            return todo.done ? '😜' : '🏃'
        }
    }));

    return useObserver(() => (
        <h3 onClick={todo.toggle}>
            {todo.title} {todo.emoji}
        </h3>
        )
    );
}