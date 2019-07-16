import React from 'react';
import styles from './Footer.modules.scss';
import classnames from 'classnames/bind'
import {Link} from "react-router-dom";


const cx = classnames.bind(styles);

export default function Footer() {
    return (
        <footer className={cx('footer')}>
            <Link to="/" className={cx('brand')}>reactblog</Link>
            <div className={cx('admin-login')}>관리자 로그인</div>
        </footer>
    );
}