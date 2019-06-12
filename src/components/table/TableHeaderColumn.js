import React from 'react';

export default function TableHeaderColumn(props) {
    const {scope, className} = props;

    return (
        <th className={className} scope={scope}>{props.children}</th>
    );
}