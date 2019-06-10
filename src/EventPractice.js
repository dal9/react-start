import React, {useState} from 'react';

export default function EventPractice(props) {
    const [message, setMassage] = useState("");
    const [username, setUsername] = useState("");

    function handleMassageChange(e) {
        setMassage(e.target.value);
    }

    function handleUsernameChange(e) {
        setUsername(e.target.value);
    }

    function handleClick() {
        alert(username + ", " + message);
        setMassage('');
        setUsername('')
    }

    function handleKeyPress(e) {
        if(e.key === 'Enter') {
            handleClick();
        }
    }

    return (
        <div>
            <h1>이벤트 연습</h1>
            <input type="text" name="username" placeholder="이름" value={username} onChange={handleUsernameChange}/>
            <input type="text" name="message" placeholder="아무거나 입력해보세요" value={message} onChange={handleMassageChange} onKeyPress={handleKeyPress}/>
            <button onClick={handleClick}>확인</button>
        </div>
    );
}

