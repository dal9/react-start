import React from 'react';
import TodoInput from '../components/TodoInput';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";

import * as inputActions from '../modules/input';
import * as todoActions from '../modules/todo';

let id = 1;

function TodoInputContainer(props) {

    const {value} = props;

    const getId = () => {
        return ++id;
    };

    const handleChange = (e) => {
        const {value} = e.target;

        console.log(value);
        const { InputActions } = props;
        InputActions.setInput(value);
    };

    const handleInsert = () => {
        const {InputActions, TodoActions, value} = props;
        const todo = {
            id : getId(),
            text : value,
            done : false
        };
        TodoActions.insert(todo);
        InputActions.setInput("");
    };

    return (
        <TodoInput onChange={handleChange} onInsert={handleInsert} value={value}/>
    );
}

export default connect(
    (state) => ({
        value: state.input.get('value')
    }), (dispatch) => ({
        InputActions: bindActionCreators(inputActions, dispatch),
        TodoActions: bindActionCreators(todoActions, dispatch)
    })
)(TodoInputContainer);

