import React from 'react';
import classnames from 'classnames/bind';


const cx = classnames.bind();

export default function CardSubTitle(props) {

    const {className} = props;

    return (
        <h6 className={cx("card-subtitle", className)}>{props.children}</h6>
    );
}