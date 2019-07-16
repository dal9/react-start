import React from 'react';
import styles from './PostBody.modules.scss';
import classnames from 'classnames/bind'


const cx = classnames.bind(styles);

export default function PostBody() {
    return (
        <div className={cx('post-body')}>
            <div className={cx('paper')}>
                내용
            </div>
        </div>
    );
}