import React from 'react';
import styles from './ListWrapper.modules.scss';
import classnames from 'classnames/bind'


const cx = classnames.bind(styles);

export default function ListWrapper({children}) {
    return (
        <div className={cx('list-wrapper')}>
            {children}
        </div>
    );
}