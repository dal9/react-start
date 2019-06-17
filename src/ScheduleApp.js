import React, {useState, useMemo} from 'react';
import './App.css';
import PageTemplate from "./schedule";
import TodoInput from "./schedule/TodoInput";
import TodoList from "./schedule/TodoList";


let id = 1;

const initialTodos = new Array(500).fill(0).map(
    (foo, index) => ({id: index, text : `일정 ${index}`, done: false})
);

function ScheduleApp(props) {

    const [input, setInput] = useState("");
    const [todos, setTodos] = useState(initialTodos);

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
        setTodos([...todos, newTodo]);
    };

    const handleToggle = (id) => {
        const index = todos.findIndex(todo => todo.id === id);

        const toggled = {
            ...todos[index],
            done: !todos[index].done
        };

        setTodos([
            ...todos.slice(0, index),
            toggled,
            ...todos.slice(index + 1, todos.length)
        ]);

    };

    const handleRemove = (id) => {
        const index = todos.findIndex(todo => todo.id === id);

        setTodos([
            ...todos.slice(0, index),
            ...todos.slice(index + 1, todos.length)
        ]);
    };

    const todoList = useMemo(() => <TodoList todos={todos} onToggle={handleToggle} onRemove={handleRemove}/>, [todos]);

    return (
        <PageTemplate>
            <TodoInput onChange={handleChange} onInsert={handleInsert} value={input}/>
            {todoList}
        </PageTemplate>
    );
}

export default ScheduleApp;
