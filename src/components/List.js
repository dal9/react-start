import React from 'react';
import {Card, CardBody, CardHeader, CardText, CardTitle} from "./card";
import DataGrid from "./list/DataList";
import {Pagination} from "./pagination";

export default function List(props) {

    const {title, pageable, pageInfo} = props;

    return (
        <Card>
            <CardHeader className={"bg-transparent font-weight-bold"}>
                <CardText>{title}</CardText>
            </CardHeader>
            <CardBody>
                <DataGrid {...props}/>
                {pageable && (
                    <Pagination {...pageInfo}/>
                )}
            </CardBody>
        </Card>
    );
}