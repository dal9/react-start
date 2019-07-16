import React from 'react';
import classnames from 'classnames/bind'
import PageTemplate from "../components";
import PostInfo from "../components/post/PostInfo";
import PostBody from "../components/post/PostBody";


const cx = classnames.bind();

export default function PostPage() {
    return (
        <PageTemplate>
            <PostInfo/>
            <PostBody/>
        </PageTemplate>
    );
}