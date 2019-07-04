import React from 'react';
import classnames from 'classnames/bind'
import CreateForm from "../components/CreateForm";


const cx = classnames.bind();

const formList = [
    {
        "type": "input",
        "column": "Code",
        "value": "식별 코드",
        "isReadOnly": true
    },
    {
        "type": "input",
        "column": "Name",
        "value": "이름",
        "isReadOnly": false
    },
    {
        "type": "input",
        "column": "AuthUrl",
        "value": "인증 URL",
        "isReadOnly": false
    },
    {
        "type": "input",
        "column": "APIUrl",
        "value": "API URL",
        "isReadOnly": false
    }

];


export default function ManufacturerForm() {
    return (
        <CreateForm forms={formList}/>
    );
}
