import React from 'react';
import classname from 'classnames/bind';
import {Card, CardBody, CardHeader, CardTitle} from "./card";
import DataGrid from "./list/DataList";
import {Pagination} from "./pagination";

const cx = classname.bind();

export default function List(props) {



    const {title, pageable, onClick} = props;

    return (
        <Card>
            <CardHeader className={cx("bg-transparent")}>
                <CardTitle>{title}</CardTitle>
            </CardHeader>
                <DataGrid {...props} onClick={onClick}/>
                {pageable && (
                    <Pagination/>
                )}
        </Card>
    );
}