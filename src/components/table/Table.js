import React from 'react';


export default function Table(props) {

    const {className} = props;

    return (
        <table className={className}>
            {props.children}
        </table>
    );
}