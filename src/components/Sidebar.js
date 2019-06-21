import React from 'react';
import menu from '../json/menu.json';
import {MenuList} from "./menu";

export default function Sidebar() {
    return (
        <nav className={"navbar navbar-light"}>
            <div className={"container-fluid"}>
                <MenuList menuGroup={"Collapse"} menus={menu} isOpen/>
            </div>
        </nav>
    );
}