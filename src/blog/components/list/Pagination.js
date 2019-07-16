import React from 'react';
import styles from './Pagination.modules.scss';
import classnames from 'classnames/bind'
import Button from "../button/Button";


const cx = classnames.bind(styles);

export default function Pagination() {
    return (
        <div className={cx('pagination')}>
            <Button disabled>
                이전 페이지
            </Button>
            <div className={cx('number')}>
                페이지 1
            </div>
            <Button>
                다음 페이지
            </Button>
        </div>
    );
}