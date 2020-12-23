import React from 'react';
import styled , {css} from "styled-components/macro";
import {Link} from "react-router-dom";
import {menuData} from "../data/ManuData";
import { Button } from './Button';
import {FaBars} from "react-icons/fa"

const Nav = styled.nav`
    height: 60px;
    background : red;
    display: flex;
    justify-content: space-between;
    padding: 1rem 2rem;
    z-index: 100;
    position: fixed;
    width: 100%;

    `;

const NavLink = css`
    color: #fff;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    text-decoration: none;
`

const Logo = styled(Link)`
    color: #fff;
    font-style: italic;
    text-decoration: none;
`
const MenuBars = styled(FaBars)`
    display: none;

    @media screen and (max-width: 768px){
        display: block;
        color: white;
        cursor: pointer;
    }
`;
const NavMenu = styled.div`
    display: flex;
    align-items: center;
    margin-right: -48px;

    @media screen and (max-width: 768px){
        display: none;
    }
`;
const NavMenuLinks = styled(Link)`
    ${NavLink}
`;

const NavBtn = styled.div`
    display: flex;
    align-items: center;
    margin-right: 24px; 

    @media screen and (max-width: 768px){
        display: none;
    }
`;

const Navbar = () => {
    return (
        <Nav>
            <Logo to = "/">ELIXR</Logo>
            <MenuBars /> 
            <NavMenu>
                {menuData.map((item, index)=> (
                    <NavMenuLinks to = {item.link} key={index}>
                        {item.title}
                    </NavMenuLinks>
                ))}
            </NavMenu>
            <NavBtn>
                <Button to= "/contact" primary="true">Contact Us</Button>
            </NavBtn>
        </Nav>
    )
}

export default Navbar;