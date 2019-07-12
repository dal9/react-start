import React, {useState} from 'react';
import classnames from 'classnames/bind'


const cx = classnames.bind();

export default function FormGroup(props) {

    const {row, column, value, isReadOnly} = props;
    const {inputData} = props;

    const [inputValue, setInputValue] = useState(inputData || "");

    const attr = {
        "readOnly": isReadOnly
    };

    const handleChange = (e) => setInputValue(e.target.value);

    return (
        <div className={cx("form-group", {"row": row})}>
            <label htmlFor={`input-${column}`} className={cx("col-2", "col-form-label", "text-right")}>{value}</label>
            <div className={cx("col-10")}>
                <input type="text" className={cx({"form-control": !isReadOnly}, {"form-control-plaintext": isReadOnly})}
                       id={`input-${column}`} name={column} onChange={handleChange} value={inputValue} {...attr}/>
            </div>
        </div>
    );
}