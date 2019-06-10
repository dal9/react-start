import React, {useState, useRef} from 'react';
import './ValidationSample.css'

export default function ValidationSample(props) {

    const inputE1 = useRef(null);
    const [password, setPassword] = useState("");
    const [state, setState] = useState({clicked: false, validated: false});


    function handleChange(e) {
        setPassword(e.target.value);
    }

    function handleButtonClick() {
        console.log(password);
        setState({clicked: true, validated: password === '0000'});
        inputE1.current.focus();
    }

    return (
        <div>
            <input type="password" name="password"
                   value={password}
                   ref={inputE1}
                   onChange={handleChange}
                   className={state.clicked ? (state.validated ? 'success' : 'failure') : ''}/>
            <button onClick={handleButtonClick}>검증하기</button>
        </div>
    );
}

