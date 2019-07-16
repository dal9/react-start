import React, {useState} from 'react';
import styles from './EditorTemplate.modules.scss';
import classnames from 'classnames/bind'


const cx = classnames.bind(styles);

export default function EditorTemplate(props) {

    const {header, editor, preview} = props;
    const [leftPercentage, setLeftPercentage] = useState(0.5);

    const leftStyle = {
        flex : leftPercentage
    };

    const rightStyle = {
        flex : 1 - leftPercentage
    };

    const separatorStyle = {
        left : `${leftPercentage * 100}%`
    };

    const handleMouseMove = (e) => {
        setLeftPercentage(e.clientX / window.innerWidth);
    };

    const handleMouseUp = (e) => {
        document.body.removeEventListener("mousemove", handleMouseMove);
        window.removeEventListener("mouseup", handleMouseUp);
    };

    const handleSeparatorMouseDown = (e) => {
        document.body.addEventListener("mousemove", handleMouseMove);
        window.addEventListener("mouseup", handleMouseUp);
    };

    return (
        <div className={cx('editor-template')}>
            {header}
            <div className={cx('panes')}>
                <div className={cx('pane', 'editor')} style={leftStyle}>
                    {editor}
                </div>
                <div className={cx('pane', 'preview')} style={rightStyle}>
                    {preview}
                </div>
                <div className={cx('separator')} style={separatorStyle} onMouseDown={handleSeparatorMouseDown}/>
            </div>
        </div>
    );
}