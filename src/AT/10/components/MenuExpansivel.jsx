// src/TP1/10/components/MenuResponsivo.jsx
import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaUser } from 'react-icons/fa';

const MenuContainer = styled.nav`
  font-family: Arial, sans-serif;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
    @media (min-width: 768px) {
      border: none;
      box-shadow: none;
  }
`;

const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #f8f8f8;
  border-bottom: 1px solid #ddd;
`;

const Brand = styled.span`
  font-weight: bold;
  font-size: 1.2rem;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  color: #333;
  padding: 5px;

  @media (min-width: 768px) {
    display: ${props => props.hideOnDesktop ? 'none' : 'block'};
  }
`;

const MenuOptions = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  max-height: ${props => props.isExpanded ? '1000px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;

  @media (min-width: 768px) {
    display: flex;
    max-height: none;
    flex-grow: 1;
    justify-content: center;
    margin: 0 20px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const MenuItem = styled.li`
  padding: 15px;
  border-top: 1px solid #ddd;
  background-color: white;

  @media (min-width: 768px) {
    border-top: none;
    padding: 0 15px;
    background-color: transparent;
  }
`;

const MenuContent = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    transform: translateY(-150%);
  }
`;

const MenuResponsivo = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <MenuContainer>
      <MenuHeader>
        <IconButton onClick={toggleMenu} aria-label="Expandir menu" hideOnDesktop>
          <FaBars />
        </IconButton>
        <Brand>Menu INFNET</Brand>
        <IconButton aria-label="Perfil do usuário">
          <FaUser />
        </IconButton>
      </MenuHeader>
      <MenuContent>
        <MenuOptions isExpanded={isExpanded}>
          <MenuItem>Opção 1</MenuItem>
          <MenuItem>Opção 2</MenuItem>
          <MenuItem>Opção 3</MenuItem>
          <MenuItem>Opção 4</MenuItem>
        </MenuOptions>
      </MenuContent>
    </MenuContainer>
  );
};

export default MenuResponsivo;