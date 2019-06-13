import React from 'react';
import classnames from 'classnames/bind';
import {Table, TableBody, TableColumn, TableHeader, TableHeaderColumn, TableRow} from "../table";

const cx = classnames.bind();

/* ex) data
const dataHead = [
    {
        "code": "식별 코드"
    },
    {
        "name": "이름"
    },
    {
        "authorizationUrl": "인증 URL"
    },
    {
        "createdDatetime": "생성일시"
    }
];*/


export default function DataGrid(props) {

    const {dataHead, dataList, isSmall} = props;

    if(!dataHead) return null;

    return (
        <Table className={cx("table-hover", {"table-sm": isSmall})}>
            <TableHeader>
                <TableRow className="table-active">
                    <TableHeaderColumn scop="col">#</TableHeaderColumn>
                    {dataHead && dataHead.map((data, index) => <TableHeaderColumn key={index} scope="col">{Object.values(data)}</TableHeaderColumn>)}
                </TableRow>
            </TableHeader>
            <TableBody>
                {dataList && dataList.map((item, index) => (
                    <TableRow key={index}>
                        <TableHeaderColumn scope="row">{index}</TableHeaderColumn>
                        {dataHead.map((data, index) => <TableColumn key={index}>{item[Object.keys(data)]}</TableColumn>)}
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    );
}