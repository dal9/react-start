import React from 'react';
import classnames from 'classnames/bind'
import EditorTemplate from "../components/EditorTemplate";
import EditorHeader from "../components/editor/EditorHeader";
import EditorPaneContainer from "../components/containers/EditorPaneContainer";
import PreviewPaneContainer from "../components/containers/PreviewPaneContainer";


const cx = classnames.bind();

export default function EditorPage() {
    return (
        <EditorTemplate
            header={<EditorHeader/>}
            editor={<EditorPaneContainer/>}
            preview={<PreviewPaneContainer/>}
        />
    );
}