import React from 'react';


export default function Form(props) {

    const {className, ...rest} = props;

    return (
        <form className={className} {...rest}>
            {props.children}
        </form>
    );
}