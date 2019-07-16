import React from 'react';
import styles from './EditorHeader.modules.scss';
import classnames from 'classnames/bind'
import Button from "../button/Button";


const cx = classnames.bind(styles);

export default function EditorHeader({onGoBack, onSubmit}) {
    return (
        <div className={cx('editor-header')}>
            <div className={cx('back')}>
                <Button onClick={onGoBack} theme="outline">뒤로가기</Button>
            </div>
            <div className={cx('submit')}>
                <Button onClick={onSubmit} theme="outline">작성하기</Button>
            </div>
        </div>
    );
}