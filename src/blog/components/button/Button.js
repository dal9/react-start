import React from 'react';
import styles from './Button.modules.scss';
import classnames from 'classnames/bind'
import {Link} from "react-router-dom";


const cx = classnames.bind(styles);

export default function Button({children, to, onClick, disabled, theme = 'default'}) {

    const Div = ({children, ...rest}) => <div {...rest}>{children}</div>;

    const Element = (to && !disabled) ? Link : Div;

    return (
        <Element to={to} className={cx('button', theme, {disabled})} onClick={disabled ? () => null : onClick}>
            {children}
        </Element>
    );
}