import React from 'react';
import MenuList from "./MenuList";

export default function MenuItem(props) {
    const {menuId, menuName, program, subMenus} = props.menu;
    const {programId, programName, programPath} = program;

    return (
        <li className={"nav-item"}>
            <a className={"nav-link collapsed"} role={"button"} href={`#sidebar${programId}`} data-toggle={"collapse"} aria-expanded={"false"} aria-controls={`#sidebar${programId}`}>{menuName}</a>
            {subMenus && (
                <MenuList menuGroup={programId} menus={subMenus} isSub/>
            )}
        </li>
    );
}