import React from 'react';
import styled from 'styled-components';
import Text from '../Text/Text';
import theme from '../../tokens/theme';

interface NavElementProps {
  text: string;
  active?: boolean;
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

const NavElement = ({ text, active = false }: NavElementProps) => {
  const color = active ? 'accent' : 'grey';
  return (
    <StyledNavElement>
      <Text type="paragraph500" color={color}>
        {text}
      </Text>
    </StyledNavElement>
  );
};

export default NavElement;
