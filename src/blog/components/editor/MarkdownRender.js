import React, {useState, useEffect} from 'react';
import styles from './MarkdownRender.modules.scss';
import classnames from 'classnames/bind';
import Prism from 'prismjs';
import 'prismjs/themes/prism-okaidia.css';

import marked from 'marked';

const cx = classnames.bind();

export default function MarkdownRender(props) {

    const {markdown} = props;
    const [html, setHtml] = useState(markdown ? marked(markdown, {breaks: true, sanitize: true}) : '');
    const markup = {
        __html : html
    };

    const renderMarkdown = () => {
        if (!markdown) {
            setHtml('');
            return;
        }

        setHtml(marked(markdown, {
            breaks: true,
            sanitize: true
        }));
    };

    useEffect(() => {
        renderMarkdown();
    }, [markdown]);

    useEffect(() => {
        Prism.highlightAll();
    }, [html]);

    return (
       <div className={cx('markdown-render')} dangerouslySetInnerHTML={markup}/>
    );
}