import React from 'react';
import classnames from 'classnames/bind';


const cx = classnames.bind();

export default function CardBody(props) {

    const {className} = props;

    return (
        <div className={cx("card-body", className)}>
            {props.children}
        </div>
    );
}