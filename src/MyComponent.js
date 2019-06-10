import React, {useState} from 'react';
import PropTypes from 'prop-types';

function MyComponent(props) {
    const [number, setNumber] = useState(0);
    const triple = (value) => value * 3;

    return (
        <div>
            <p>안녕하세요, 제 이름은 {props.name} 입니다.</p>
            <p>저는 {props.age}살 입니다.</p>
            <p>숫자 : {number}</p>
            <button onClick={() => {
                console.log(triple(number));
                setNumber(number+1);
            }}>더하기</button>
        </div>
    );
}

MyComponent.defaultProps = {
    name : '기본 이름'
}

MyComponent.propTypes = {
    name : PropTypes.string, // name props 타입을 문자열로 설정합니다.
    age : PropTypes.number.isRequired // 필수적으로 존재해야 하며, 숫자입니다.
}

export default MyComponent;