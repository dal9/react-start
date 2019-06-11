import React from 'react';
import menu from './menu.json';
import MenuList from "./MenuList";

export default function Sidebar() {
    return (
        <nav className={"navbar navbar-light"}>
            <div className={"container-fluid"}>
                <MenuList menuGroup={"Collapse"} menus={menu} isOpen/>
            </div>
        </nav>
    );
}