import React from 'react';
import classnames from 'classnames/bind';


const cx = classnames.bind();

export default function PageItem(props) {

    const {active, disabled} = props;

    return (
        <li className={cx("page-item", {"active" : active}, {"disabled" : disabled})} aria-disabled={!disabled && undefined} aria-current={active ? "page" : undefined}>{props.children}</li>
    );
}