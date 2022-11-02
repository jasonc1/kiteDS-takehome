import React from 'react';
import styled from 'styled-components';
import NavElement from './NavElement';

const StyledNav = styled.div`
  margin-left: 120px;
  display: inline-flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 32px;
`;

export type NavElementType = {
  id: string;
  active?: boolean;
};

interface NavProps {
  items: NavElementType[];
  updateNav: (id: string) => void;
}

const Nav = ({ items, updateNav }: NavProps) => {
  return (
    <StyledNav>
      {items.map((item, i) => (
        <NavElement
          text={item.id}
          active={item.active}
          updateNav={updateNav}
        ></NavElement>
      ))}
    </StyledNav>
  );
};

export default Nav;
