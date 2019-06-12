import React from 'react';


export default function TableBody(props) {

    const {className} = props;

    return (
        <tbody className={className}>
        {props.children}
        </tbody>
    );
}