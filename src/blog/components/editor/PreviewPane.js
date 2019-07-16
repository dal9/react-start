import React from 'react';
import styles from './PreviewPane.modules.scss';
import classnames from 'classnames/bind'
import MarkdownRender from "./MarkdownRender";


const cx = classnames.bind(styles);

export default function PreviewPane({markdown, title}) {
    return (
        <div className={cx('preview-pane')}>
            <h1 className={cx('title')}>
                {title}
            </h1>
            <div>
               <MarkdownRender markdown={markdown}/>
            </div>
        </div>
    );
}