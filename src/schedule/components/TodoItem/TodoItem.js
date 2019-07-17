import React, {useEffect, useMemo} from 'react';
import styles from './TodoItem.modules.scss';
import classnames from 'classnames/bind';

const cx = classnames.bind(styles);

export default function TodoItem(props) {

    const {done, children, onToggle, onRemove} = props;

    return (
        <div className={cx('todo-item')} onClick={onToggle}>
            <input className={cx('tick')} type="checkbox" checked={done} readOnly/>
            <div className={cx('text', {done})}>{children}</div>
            <div className={cx('delete')} onClick={(e) => {
                onRemove();
                e.stopPropagation();
            }}>[지우기]
            </div>
        </div>
    );
}

