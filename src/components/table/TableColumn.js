import React from 'react';

export default function TableColumn(props) {

    const {colspan, className} = props;

    return (
        <td className={className} colspan={colspan}>{props.children}</td>
    );
}