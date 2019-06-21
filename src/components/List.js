import React from 'react';
import {Card, CardBody, CardHeader, CardText} from "./card";
import DataGrid from "./list/DataList";
import {Pagination} from "./pagination";

export default function List(props) {

    const {title, pageable, pageInfo, onClick, onPageClick} = props;

    return (
        <Card>
            <CardHeader className={"bg-transparent font-weight-bold"}>
                <CardText>{title}</CardText>
            </CardHeader>
            <CardBody>
                <DataGrid {...props} onClick={onClick}/>
                {pageable && (
                    <Pagination {...pageInfo} onPageClick={onPageClick}/>
                )}
            </CardBody>
        </Card>
    );
}