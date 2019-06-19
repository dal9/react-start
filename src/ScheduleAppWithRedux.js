import React from 'react';
import PageTamplate from './schedule/PageTemplate';
import TodoInputContainer from './containers/TodoInputContainer';
import TodoListContainer from './containers/TodoListContainer';


export default function ScheduleAppWithRedux(props) {
    return (
        <PageTamplate>
            <TodoInputContainer/>
            <TodoListContainer/>
        </PageTamplate>
    );
}

