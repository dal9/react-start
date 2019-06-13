import React from 'react';
import classnames from 'classnames/bind';


const cx = classnames.bind();

export default function PageItem(props) {

    const {className, ...rest} = props;

    return (
        <li className={cx("page-item", className)} {...rest}>{props.children}</li>
    );
}