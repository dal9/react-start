import React, {useState, useEffect} from 'react';
import classnames from 'classnames/bind';
import PageItem from "./PageItem";
import PageLink from "./PageLink";


const cx = classnames.bind();

export default function Pagination(props) {

    const {className, totalPages, pageSize, onPageClick} = props;

    const [pageNumber, setPageNumber] = useState(1);

    const [first, setFirst] = useState(false);
    const [last, setLast] = useState(false);

    const range = () => {
        const pages = [];
        pages.push("<");
        for(let i=1; i<=totalPages; i++) {
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
        console.log(gotoPage);

        setPageNumber(gotoPage);
    };

    useEffect(() => {
        if (pageNumber === 1) {
            setFirst(true);
        } else {
            setFirst(false);
        }
        if (pageNumber === totalPages) {
            setLast(true);
        } else {
            setLast(false);
        }
    });

    return (
        <nav aria-label="Page navigation">
            <ul className={cx("pagination pagination-sm", "justify-content-center", className)}>
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
    );
}