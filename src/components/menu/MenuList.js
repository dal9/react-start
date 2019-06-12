import React from 'react';
import MenuItem from "./MenuItem";

export default function MenuList(props) {

    const {menuGroup, menus, isOpen, isSub} = props;

    return (
        <div className={`collapse${isOpen ? " show" : ''}${isSub ? " ml-2" : ''}`} id={`sidebar${menuGroup}`}>
            <ul className={"navbar-nav"}>
                {menus && menus.map((menu) => {
                    const {menuId} = menu;
                    return (
                        <MenuItem key={menuId} menu={menu}/>
                    )
                })}
            </ul>
        </div>
    );
}
