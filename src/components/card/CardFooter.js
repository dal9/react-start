import React from 'react';
import classnames from 'classnames/bind';


const cx = classnames.bind();

export default function CardFooter(props) {

    const {className} = props;

    return (
        <div className={cx('card-footer', className)}>
            {props.children}
        </div>
    );
}