import React from 'react';
import classnames from 'classnames/bind'


const cx = classnames.bind();

export default function FormGroup(props) {

    const {row, column, value, isReadOnly} = props;

    return (
        <div className={cx("form-group", {"row": row})}>
            <label htmlFor={`input${column}`} className={cx("col-2", "col-form-label", "text-right")}>{value}</label>
            <div className={cx("col-10")}>
                <input type="text" className={cx("form-control", {"form-control-plaintext" : isReadOnly})} id={`input${column}`} name={column} />
            </div>
        </div>
    );
}