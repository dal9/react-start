import React, {useCallback, useState} from 'react';
import './App.css';
import PageTemplate from "./schedule";
import TodoInput from "./schedule/TodoInput";
import TodoList from "./schedule/TodoList";


let id = 1;

const initialTodo = new Array(500).fill(0).map(
    (foo, index) => ({id: index, text: `일정 ${index}`, done: false})
);

function ScheduleApp(props) {

    const [input, setInput] = useState("");
    const [todo, setTodo] = useState(initialTodo);

    const handleChange = (e) => {
        setInput(e.target.value);
    };

    function getId() {
        return ++id;
    };

    const handleInsert = () => {
        const newTodo = {
            text: input,
            done: false,
            id: getId()
        };

        setInput("");
        setTodo([...todo, newTodo]);
    };

    const handleToggle = (id) => {
        const index = todo.findIndex(item => item.id === id);

        const toggled = {
            ...todo[index],
            done: !todo[index].done
        };

        setTodo([
            ...todo.slice(0, index),
            toggled,
            ...todo.slice(index + 1, todo.length)
        ]);

    };

    const handleRemove = (id) => {
        const index = todo.findIndex(item => item.id === id);

        setTodo([
            ...todo.slice(0, index),
            ...todo.slice(index + 1, todo.length)
        ]);
    };


    const todoList = todo => (<TodoList todo={todo} onToggle={handleToggle} onRemove={handleRemove}/>);

    const todoListCallback = useCallback(todoList(todo), [todo]);

    return (
        <PageTemplate>
            <TodoInput onChange={handleChange} onInsert={handleInsert} value={input}/>
            {todoListCallback}
        </PageTemplate>
    );
}

export default ScheduleApp;
