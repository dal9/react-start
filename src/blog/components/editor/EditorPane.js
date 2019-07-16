import React, {useRef, useEffect} from 'react';
import styles from './EditorPane.modules.scss';
import classnames from 'classnames/bind';

import CodeMirror from 'codemirror';

import 'codemirror/mode/markdown/markdown';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/jsx/jsx';
import 'codemirror/mode/css/css';
import 'codemirror/mode/shell/shell';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/monokai.css';


const cx = classnames.bind(styles);

export default function EditorPane(props) {

    const {title, tags, markdown} = props;

    const editor = useRef(null);

    const handleChangeMarkdown = (doc) => {
      const {onChangeInput} = props;
        onChangeInput({
            name: 'markdown',
            value : doc.getValue()
        });
    };

    const handleChange = (e) => {
      const {onChangeInput} = props;
      const {value, name} = e.target;
      onChangeInput({name, value});
    };

    useEffect(() => {
        const code = CodeMirror(editor.current, {
            mode : 'markdown',
            theme: 'monokai',
            lineNumbers : true,
            lineWrapping: true
        }).on("change", handleChangeMarkdown);

        if(!code) { return;}
        code.setValue(markdown);
    }, []);

    return (
        <div className={cx('editor-pane')}>
            <input className={cx('title')} placeholder="제목을 입력하세요" name="title" value={title} onChange={handleChange}/>
            <div className={cx('code-editor')} ref={editor}></div>
            <div className={cx('tags')}>
                <div className={cx('description')}>태그</div>
                <input name="tags" placeholder="태그를 입력하세요 (쉼표로 구분)" value={tags} onChange={handleChange}/>
            </div>
        </div>
    );
}