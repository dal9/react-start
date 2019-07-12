import React, {useCallback, useRef} from 'react';
import classnames from 'classnames/bind'
import {observer, useObservable} from "mobx-react-lite";

const cx = classnames.bind();

const init = ['Introduce MobX in React', 'Make a great app with MobX'];

export const TodoList = observer(() => {
    const todos = useObservable({
        data : init,
    });
    const todoRef = useRef(null);
    const addTodo = useCallback(() => {
        todos.data.push(todoRef.current.value);
        todoRef.current.value = "";
    }, []);

    return (
        <>
            <h4>Todo</h4>
            <div>
                {todos.data.map(todo =>
                    <div key={todo}>
                        {todo}
                    </div>
                )}
                <input ref={todoRef} />
                <button onClick={addTodo}>Add todo</button>
            </div>
        </>
    );
});
