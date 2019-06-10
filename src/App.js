import React, {Fragment} from 'react';
import './App.css';
import MyComponent from "./MyComponent";
import EventPractice from "./EventPractice";

function App() {
    return (
        <Fragment>
            <EventPractice/>
            <MyComponent name="React" age={3}/>
        </Fragment>
    );
}

export default App;
