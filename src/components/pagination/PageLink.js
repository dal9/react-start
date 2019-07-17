import React from 'react';
import classnames from 'classnames/bind';


const cx = classnames.bind();

export default function PageLink(props) {

    const {number, active, onClick} = props;

    return (
        <a href={"#"} className={cx("page-link")} onClick={() => {onClick(number)}}>{number}{active && <span className="sr-only">(current)</span>}</a>
    );
}