import React from 'react';
import classnames from 'classnames/bind'
import CounterContainer from "../containers/CounterContainer";


const cx = classnames.bind();

export default function App() {
    return (
        <div>
            <CounterContainer/>
        </div>
    );
}