import React from 'react';
import styled from 'styled-components';
import Text from '../Text/Text';
import theme from '../../tokens/theme';

interface NavElementProps {
  text: string;
  active?: boolean;
  updateNav: (id: string) => void;
}

const StyledNavElement = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  & > {
    &:hover {
      color: ${(props) => props.theme.colors.core.white};
    }
  }
`;

const NavElement = ({ text, active = false, updateNav }: NavElementProps) => {
  const color = active ? 'accent' : 'grey';

  const handleClick = () => {
    updateNav(text);
  };

  return (
    <StyledNavElement onClick={handleClick}>
      <Text type="paragraph500" color={color}>
        {text}
      </Text>
    </StyledNavElement>
  );
};

export default NavElement;
