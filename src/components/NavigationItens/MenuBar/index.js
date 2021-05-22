import React from 'react'

import {MenuList, MenuLink} from "./styled";

const MenuBar = () => {
    return (
        <MenuList>
            <MenuLink to="/" >HOME</MenuLink>
            <MenuLink to="/timeline" >TIMELINE</MenuLink>
            <MenuLink to="/swot" >SWOT</MenuLink>
        </MenuList>
    )
}
export default MenuBar

