import React from 'react';
import styled from 'styled-components';
import NavElement from './NavElement';

const StyledNav = styled.div`
  display: inline-flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 32px;
`;

export type NavElement = {
  text: string;
  active?: boolean;
};

interface NavProps {
  items: NavElement[];
}

const Nav = ({ items }: NavProps) => {
  return (
    <StyledNav>
      {items.map((item, i) => (
        <NavElement text={item.text} active={item.active}></NavElement>
      ))}
    </StyledNav>
  );
};

export default Nav;
