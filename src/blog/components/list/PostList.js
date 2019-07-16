import React from 'react';
import styles from './PostList.modules.scss';
import classnames from 'classnames/bind'


const cx = classnames.bind(styles);

export default function PostList() {

    const PostItem = () => {
        return (
            <div className={cx('post-item')}>
                <h2><a>타이틀</a></h2>
                <div className={cx('date')}>2017-10-24</div>
                <p>내용</p>
                <div className={cx('tags')}>
                    <a>#태그</a>
                    <a>#태그</a>
                    <a>#태그</a>
                </div>
            </div>
        )
    };

    return (
        <div className={cx('post-list')}>
            <PostItem/>
            <PostItem/>
            <PostItem/>
            <PostItem/>
        </div>
    );
}