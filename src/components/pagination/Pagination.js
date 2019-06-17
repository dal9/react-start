import React from 'react';
import classnames from 'classnames/bind';
import PageItem from "./PageItem";
import PageLink from "./PageLink";


const cx = classnames.bind();

export default function Pagination(props) {

    const {className, totalPages, pageNumber, pageSize, first, last} = props;

    const range = () => {
        const pages = [];
        pages.push("<");
        for(let i=1; i<=totalPages; i++) {
            pages.push(i);
        }
        pages.push(">");
        return pages;
    }

    return (
        <nav aria-label="Page navigation">
            <ul className={cx("pagination pagination-sm", "justify-content-center", className)}>
                {range().map((pageNum, index) => {

                    let active = false;
                    let disabled = false;
                    let attr = {};

                    if((first || last) && (pageNum === "<" || pageNum === ">")) {
                        disabled = true;
                        attr = {"aria-disabled" : true};
                    }

                    if(pageNum === pageNumber) {
                        active = true;
                        attr = {"aria-current" : "page"};
                    }

                    return (
                        <PageItem className={cx({"active" : active},{"disabled" : disabled})} key={index} {...attr}>
                            <PageLink href="#">{pageNum}{pageNum === pageNumber && (<span className="sr-only">(current)</span>)}</PageLink>
                        </PageItem>
                    )
                })}
            </ul>
        </nav>
    );
}