import React, {useState} from 'react';
import classnames from 'classnames/bind'


const cx = classnames.bind();

export default function IterationSample() {

    const [name, setName] = useState("");
    const [names, setNames] = useState(['눈사람', '얼음', '눈', '바람']);
    const nameList = names.map((name, index) =>
        <li key={index} onDoubleClick={() => handleRemove(index)}>{name}</li>
    );

    const handleChange = (e) => {
        setName(e.target.value);
    };

    const handleInsert = () => {
        setNames(names.concat(name));
        setName("");
    };

    const handleRemove = (index) => {

        console.log(...names);
        setNames([
            ...names.slice(0, index),
            ...names.slice(index + 1, names.length)
        ]);
        // same -> [].concat(names.slice(0, index), names.slice(index + 1, names.length))
        // same -> names.filter((item, i) => i !== index)
    };

    return (
        <div>
            <input onChange={handleChange} value={name}/>
            <button onClick={handleInsert}>추가</button>
            <ul>
                {nameList}
            </ul>
        </div>
    );
}