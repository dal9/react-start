import React from 'react';


export default function TableRow(props) {

    const {className} = props;

    return (
        <tr className={className}>
            {props.children}
        </tr>
    );
}