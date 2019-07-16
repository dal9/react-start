import React from 'react';
import classnames from 'classnames/bind'
import EditorPane from "../editor/EditorPane";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as editorActions from '../../modules/editor'


const cx = classnames.bind();

function EditorPaneContainer(props) {

    const {title, tags, markdown} = props;

    const handleChangeInput = ({name, value}) => {
        const {EditorActions} = props;
        EditorActions.changeInput({name,value});
    };

    return (
        <EditorPane title={title} markdown={markdown} tags={tags} onChangeInput={handleChangeInput}/>
    );
}

export default connect(
    (state) => ({
        title: state.editor.get('title'),
        markdown: state.editor.get('markdown'),
        tags: state.editor.get('tags')
    }),
    (dispatch) => ({
        EditorActions: bindActionCreators(editorActions, dispatch)
    })
)(EditorPaneContainer);