import React from 'react';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as MenuIcon } from '../../assets/images/icon-menu.svg';
import { Navbar, LogoContainer, Menu, MenuItem, MenuContainer } from './Header.styled';

const Header = () => {
  return (
    <Navbar>
      <LogoContainer>
        <Logo />
      </LogoContainer>
      <Menu>
        <MenuItem><a href="#">Home</a></MenuItem>
        <MenuItem><a href="#">New</a></MenuItem>
        <MenuItem><a href="#">Popular</a></MenuItem>
        <MenuItem><a href="#">Trending</a></MenuItem>
        <MenuItem><a href="#">Categories</a></MenuItem>
      </Menu>
      <MenuContainer>
      <MenuIcon />
      </MenuContainer>
      
    </Navbar>
  );
};

export default Header;
