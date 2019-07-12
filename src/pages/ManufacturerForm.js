import React from 'react';
import classnames from 'classnames/bind'
import CreateForm from "../components/CreateForm";
import data from "../json/data.json";


const cx = classnames.bind();

const formList = [
    {
        "type": "input",
        "column": "code",
        "value": "식별 코드",
        "isReadOnly": true
    },
    {
        "type": "input",
        "column": "name",
        "value": "이름",
        "isReadOnly": false
    },
    {
        "type": "input",
        "column": "authorizationUrl",
        "value": "인증 URL",
        "isReadOnly": false
    },
    {
        "type": "input",
        "column": "controlUrl",
        "value": "Control URL",
        "isReadOnly": false
    }

];

export default function ManufacturerForm(props) {

    const attr = {
        "data": data[0],
        "forms": formList
    };

    const handleCancel = () => console.log("cancel");

    return (
        <div className="container-fluid">
            <h3 className={"my-3"}>제품관리</h3>
            <CreateForm {...attr} onCancel={handleCancel}/>
        </div>
    );
}
