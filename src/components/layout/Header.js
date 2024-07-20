import React, { useState } from 'react';
import { ReactComponent as Logo } from '../../assets/images/logo.svg';
import { ReactComponent as MenuIcon } from '../../assets/images/icon-menu.svg';
import { ReactComponent as CloseIcon } from '../../assets/images/icon-menu-close.svg';
import { 
  Navbar, 
  LogoContainer, 
  Menu, 
  MenuItem, 
  MenuContainer, 
  MobileMenu, 
  CloseMenuIcon 
} from './Header.styled';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

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
      <MenuContainer onClick={toggleMobileMenu}>
        <MenuIcon />
      </MenuContainer>
      {isMobileMenuOpen && (
        <MobileMenu>
          <CloseMenuIcon onClick={toggleMobileMenu}>
            <CloseIcon />
          </CloseMenuIcon>
          <MenuItem><a href="#">Home</a></MenuItem>
          <MenuItem><a href="#">New</a></MenuItem>
          <MenuItem><a href="#">Popular</a></MenuItem>
          <MenuItem><a href="#">Trending</a></MenuItem>
          <MenuItem><a href="#">Categories</a></MenuItem>
        </MobileMenu>
      )}
    </Navbar>
  );
};

export default Header;
