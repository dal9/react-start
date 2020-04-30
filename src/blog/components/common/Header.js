import React from 'react';
import styles from './Header.modules.scss';
import classnames from 'classnames/bind'
import {Link} from "react-router-dom";
import Button from "../button/Button";


const cx = classnames.bind(styles);

export default function Header() {
    return (
        <header className={cx('header')}>
            <div className={cx('header-content')}>
                <div className={cx('brand')}>
                    <Link to="/">reactblog</Link>
                </div>
                <div className={cx('right')}>
                    <Button theme="outline" to="/editor">새 포스트</Button>
                </div>
            </div>
        </header>
    );
}