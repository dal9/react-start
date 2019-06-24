import React from 'react';
import classnames from 'classnames/bind'
import List from "../components/List";
import data from "../json/data";


const cx = classnames.bind();



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
    first: false,
    last: false
};

export default function Manufacturer(props) {



    const handleClick = (id) => {
        console.log(id);
    };

    const handlePageClick = (num) => {
        console.log(num);
    };

    return (
        <div className={"container-fluid"}>
            <h3 className={"mt-3"}>제품관리</h3>
            <List title={"제품목록"} isSmall dataHead={manufacturesGridHead} dataList={data} pageable pageInfo={pageInfo} onClick={handleClick} onPageClick={handlePageClick}/>
        </div>
    );
}