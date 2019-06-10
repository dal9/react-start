import React, {Fragment} from 'react';
import './App.css';
import MyComponent from "./MyComponent";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";

function App() {
    return (
        <Fragment>
            <EventPractice/>
            <MyComponent name="React" age={3}/>
            <ValidationSample/>
        </Fragment>
    );
}

export default App;
