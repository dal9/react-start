import React from 'react';
import classnames from 'classnames/bind'
import PageTemplate from "../components";
import ListWrapper from "../components/list/ListWrapper";
import PostList from "../components/list/PostList";
import Pagination from "../components/list/Pagination";


const cx = classnames.bind();

export default function ListPage() {
    return (
        <PageTemplate>
            <ListWrapper>
                <PostList/>
                <Pagination/>
            </ListWrapper>
        </PageTemplate>
    );
}