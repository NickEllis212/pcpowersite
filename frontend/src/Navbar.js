import logo from './logo.png'
import React from 'react';
import {
  Nav,
  NavLink,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
        <img className="logo" src={logo}alt="logo" />
        </NavLink>
        <NavMenu>
          <NavLink to='' activeStyle>
            
          </NavLink>
          <NavLink to='' activeStyle>
            
          </NavLink>
          <NavLink to='/' activeStyle>
            PC POWER
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            
          </NavLink>
          
        </NavMenu>
        <NavBtn>
          <NavBtnLink to='/signin'>SignIn</NavBtnLink>
        </NavBtn>
        <NavBtn>
          <NavBtnLink to='/basket'>Basket</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;