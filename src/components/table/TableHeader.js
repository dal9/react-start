import React from 'react';


export default function TableHeader(props) {

    const {className} = props;

    return (
        <thead className={className}>
        {props.children}
        </thead>
    );
}