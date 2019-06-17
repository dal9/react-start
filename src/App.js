import React, {useRef, Fragment} from 'react';
import './App.css';
import MyComponent from "./MyComponent";
import EventPractice from "./EventPractice";
import ValidationSample from "./ValidationSample";
import ScrollBox from "./ScrollBox";
import IterationSample from "./IterationSample";

function App() {

    const scrollBoxRef = useRef(null);

    return (
        <Fragment>
            <EventPractice/>
            <hr/>
            <MyComponent name="React" age={3}/>
            <hr/>
            <ValidationSample/>
            <hr/>
            <ScrollBox ref={scrollBoxRef}/>
            <button onClick={() => scrollBoxRef.current.scrollToBottom()}>맨 밑으로</button>
            <hr/>
            <IterationSample />
        </Fragment>
    );
}

export default App;
