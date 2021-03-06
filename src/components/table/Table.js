import React from 'react';
import classnames from 'classnames/bind';


const cx = classnames.bind();

export default function Table(props) {

    const {className} = props;

    return (
        <table className={cx("table", className)}>
            {props.children}
        </table>
    );
}