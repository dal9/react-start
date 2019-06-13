import React from 'react';
import classnames from 'classnames/bind';


const cx = classnames.bind();

export default function CardTitle(props) {

    const {className} = props;

    return (
        <h5 className={cx("card-title", className)}>{props.children}</h5>
    );
}