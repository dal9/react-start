import React from 'react';
import ReactDOM from 'react-dom';
import 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as serviceWorker from './serviceWorker';

import data from "./components/list/data.json";
import List from "./components/List";
import CreateForm from "./components/CreateForm";
import ScheduleApp from "./ScheduleApp";

const manufacturesGridHead = [
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
];

const pageInfo = {
    totalPages: 3,
    pageNumber: 1,
    pageSize: 20,
    first: true,
    last: true
};

function ManufacturerPage() {
    return (
        <div className="container-fluid">

            <List title={"제품목록"} isSmall dataHead={manufacturesGridHead} dataList={data} pageable pageInfo={pageInfo}/>
        </div>
    );
}

function ManufacturerCreate() {
    return (
        <div className="container-fluid">
            <CreateForm isReadOnly/>
        </div>
    );
}


ReactDOM.render(<ScheduleApp/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
