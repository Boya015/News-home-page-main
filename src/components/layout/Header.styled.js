import styled from 'styled-components';

export const Navbar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-right: 100px;
  background-color: white;
  padding-left: 20px;
  margin: 10px;

  @media (min-width: 768px) {
    padding-left: 70px;
    margin-top: 50px;
  }

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const LogoContainer = styled.div`
  width: 150px;
  height: auto;

  @media (max-width: 768px) {
    width: 100px;
    margin-right: 26px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  gap: 2rem;
  list-style: none;
  padding: 0;
  margin: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MenuItem = styled.li`
  color: grey;

  &:hover,
  &:focus {
    color: hsl(5, 85%, 63%);
  }
`;

export const MenuContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: block;
    width: 24px;
    height: 24px;
    background-size: cover;
    background-position: center;
    cursor: pointer;
  }
`;

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 75%;
  height: 100%;
  background-color: white;
  color: black;
  display: flex;
  list-style: none;
  line-height: 50px;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px;
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.3);
  z-index: 1000;
  text-decoration: none;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const CloseMenuIcon = styled.div`
  align-self: flex-end;
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-bottom: 20px;
`;
