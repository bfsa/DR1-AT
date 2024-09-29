import React, { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaUser } from 'react-icons/fa';

const MenuContainer = styled.nav`
  max-width: 300px;
  margin: 20px auto;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0,0,0,0.1);
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
  transition: color 0.3s ease;

  &:hover {
    color: #007bff;
  }
`;

const MenuOptions = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  max-height: ${props => props.isExpanded ? '1000px' : '0'};
  overflow: hidden;
  transition: max-height 0.3s ease-in-out;
`;

const MenuItem = styled.li`
  padding: 15px;
  border-bottom: 1px solid #ddd;
  transition: background-color 0.3s ease;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #f0f0f0;
  }
`;

const MenuExpansivel = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <MenuContainer>
      <MenuHeader>
        <IconButton onClick={toggleMenu} aria-label="Expandir menu">
          <FaBars />
        </IconButton>
        <Brand>Menu INFNET</Brand>
        <IconButton aria-label="Perfil do usuário">
          <FaUser />
        </IconButton>
      </MenuHeader>
      <MenuOptions isExpanded={isExpanded}>
        <MenuItem>Opção 1</MenuItem>
        <MenuItem>Opção 2</MenuItem>
        <MenuItem>Opção 3</MenuItem>
        <MenuItem>Opção 4</MenuItem>
      </MenuOptions>
    </MenuContainer>
  );
};

export default MenuExpansivel;