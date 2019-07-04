import React, {useContext} from 'react';
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

export default function Manufacturer(props) {

    const handleClick = (id) => {
        console.log(id);
    };

    return (
        <div className={cx("container-fluid")}>
            <h3 className={"mt-3"}>제품관리</h3>
            <List title={"제품목록"} isSmall dataHead={manufacturesGridHead} dataList={data} pageable onClick={handleClick}/>
        </div>
    );
}