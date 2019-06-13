import React from 'react';
import classnames from 'classnames/bind';


const cx = classnames.bind();

export default function CardHeader(props) {

    const {className} = props;

    return (
        <div className={cx('card-header', className)}>
            {props.children}
        </div>
    );
}