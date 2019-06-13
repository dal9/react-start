import React from 'react';
import classnames from 'classnames/bind';


const cx = classnames.bind();

export default function CardLink(props) {

    const {className, ...rest} = props;

    return (
        <a {...rest} className={cx("card-link", className)}>{props.children}</a>
    );
}