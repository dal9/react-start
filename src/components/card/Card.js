import React from 'react';
import classnames from 'classnames/bind';


const cx = classnames.bind();

export default function Card(props) {

    const {className} = props;

    return (
        <div className={cx("card", className)}>
            {props.children}
        </div>
    );
}