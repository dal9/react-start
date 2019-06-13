import React from 'react';
import classnames from 'classnames/bind';


const cx = classnames.bind();

export default function CardText(props) {

    const {className} = props;

    return (
        <p className={cx("card-text", className)}>
            {props.children}
        </p>
    );
}