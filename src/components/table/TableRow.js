import React from 'react';


export default function TableRow(props) {

    const {className, onClick} = props;

    return (
        <tr className={className} onClick={onClick}>
            {props.children}
        </tr>
    );
}