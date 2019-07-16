import React from 'react';
import styles from './PostInfo.modules.scss';
import classnames from 'classnames/bind'


const cx = classnames.bind(styles);

export default function PostInfo() {
    return (
        <div className={cx('post-info')}>
            <div className={cx('info')}>
                <h1>타이틀</h1>
                <div className={cx('tags')}>
                    <a>#태그</a> <a>#태그</a> <a>#태그</a>
                </div>
                <div className={cx('date')}>Oct 29, 2017</div>
            </div>
        </div>
    );
}