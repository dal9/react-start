import React from 'react';
import TodoList from '../components/TodoList';

import { connect } from 'react-redux';
import {bindActionCreators} from "redux";

import * as todoActions from '../modules/todo';

function TodoListContainer(props) {

    const {todo} = props;

    const handleToggle = (id) => {
        const { TodoActions} = props;
        TodoActions.toggle(id);
    };

    const handleRemove = (id) => {
        const { TodoActions} = props;
        TodoActions.remove(id);
    };

    return (
        <TodoList todo={todo} onToggle={handleToggle} onRemove={handleRemove}/>
    );
}

export default connect(
    (state) => ({
        todo : state.todo
    }),
    (dispatch) => ({
        TodoActions : bindActionCreators(todoActions, dispatch)
    })
)(TodoListContainer)
