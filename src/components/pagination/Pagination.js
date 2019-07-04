import React, {useState, useEffect, useContext} from 'react';
import classnames from 'classnames/bind';
import PageItem from "./PageItem";
import PageLink from "./PageLink";
import {PageContext} from "../../pages/ListProvider";


const cx = classnames.bind();

export default function Pagination(props) {

    const {state, dispatch } = useContext(PageContext);

    const {className} = props;

    const [pageNumber, setPageNumber] = useState(1);
    const [first, setFirst] = useState(false);
    const [last, setLast] = useState(false);

    const range = () => {
        const pages = [];
        pages.push("<");
        for(let i=1; i<=state.totalPages; i++) {
            pages.push(i);
        }
        pages.push(">");
        return pages;
    };

    const handleGotoPage = (gotoPage) => {

        switch(gotoPage){
            case "<" :
                gotoPage = pageNumber - 1;
                break;
            case ">" :
                gotoPage = pageNumber + 1;
                break;
            default :
        }

        setPageNumber(gotoPage);

        dispatch({type: 'gotoPage', pageNumber : gotoPage});
    };

    useEffect(() => {
        if (pageNumber === 1) {
            setFirst(true);
        } else {
            setFirst(false);
        }
        if (pageNumber === state.totalPages) {
            setLast(true);
        } else {
            setLast(false);
        }
    });

    return (
        <div className={cx("d-flex")}>
            <div className={cx("col-6", "align-self-center")}>
                <h5>{state.pageNumber} / {state.totalPages}</h5>
            </div>
            <div className={cx("col-6")}>
                <nav aria-label="Page navigation">
                    <ul className={cx("pagination pagination-sm", "justify-content-end", className)}>
                        {range().map((pageNum, index) => {

                            let active = false;
                            let disabled = false;
                            let attr = {};

                            if((first && pageNum === "<") || ( last && pageNum === ">")) {
                                disabled = true;
                                attr = {"aria-disabled" : true};
                            }

                            if(pageNum === pageNumber) {
                                active = true;
                                attr = {"aria-current" : "page"};
                            }

                            return (
                                <PageItem className={cx({"active" : active},{"disabled" : disabled})} key={index} {...attr}>
                                    <PageLink href="#" onClick={() => handleGotoPage(pageNum)}>{pageNum}{pageNum === pageNumber && (<span className="sr-only">(current)</span>)}</PageLink>
                                </PageItem>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </div>
    );
}