import React from 'react';
import classnames from 'classnames/bind';


const cx = classnames.bind();

export default function PageLink(props) {

    const {className, ...rest} = props;

    return (
        <a className={cx("page-link", className)} {...rest}>{props.children}</a>
    );
}