import React from 'react';
import classnames from 'classnames/bind'
import PreviewPane from "../editor/PreviewPane";
import {connect} from "react-redux";


const cx = classnames.bind();

function PreviewPaneContainer(props) {

    const {markdown, title} = props;

    return (
        <PreviewPane title={title} markdown={markdown}/>
    );
}

export default connect(
    (state) => ({
        title: state.editor.get('title'),
        markdown: state.editor.get('markdown')
    })
)(PreviewPaneContainer)
