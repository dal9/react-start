import React, {useRef, forwardRef, useImperativeHandle} from 'react';
import classnames from 'classnames/bind'
import styles from './ScrollBox.css';


const cx = classnames.bind(styles);

function ScrollBox(props, ref) {

    const box = useRef(null);

    useImperativeHandle(ref, () => ({
        scrollToBottom : () => {
            const {scrollHeight, clientHeight} = box.current;
            box.current.scrollTop = scrollHeight - clientHeight;
        }
    }));

    return (
        <div className={cx('scroll-box')} ref={box}>
            <div className={cx('scroll-content')}></div>
        </div>
    );
}

export default forwardRef(ScrollBox);