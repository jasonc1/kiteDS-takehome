import React from 'react';
import styled from 'styled-components';
import { createRegularExpressionLiteral } from 'typescript';
import theme from '../../tokens/theme';

const Heading2 = styled.h2<{ display: string; color: string }>`
  font-family: ${(props) => props.theme.typography.h2.fontFamily};
  font-size: ${(props) => props.theme.typography.h2.fontSize};
  line-height: ${(props) => props.theme.typography.h2.lineHeight};
  font-weight: ${(props) => props.theme.typography.h2.fontWeight};
  letter-spacing: 0.03em;
  color: ${(props) => props.color};
  display: ${(props) => props.display};
`;

const Paragraph500 = styled.p<{ display: string; color: string }>`
  font-family: ${(props) => props.theme.typography.paragraph500.fontFamily};
  font-size: ${(props) => props.theme.typography.paragraph500.fontSize};
  line-height: ${(props) => props.theme.typography.paragraph500.lineHeight};
  font-weight: ${(props) => props.theme.typography.paragraph500.fontWeight};
  color: ${(props) => props.color};
  display: ${(props) => props.display};
`;

const Small500 = styled.h2<{ display: string; color: string }>`
  font-family: ${(props) => props.theme.typography.small500.fontFamily};
  font-size: ${(props) => props.theme.typography.small500.fontSize};
  line-height: ${(props) => props.theme.typography.small500.lineHeight};
  font-weight: ${(props) => props.theme.typography.small500.fontWeight};
  color: ${(props) => props.color};
  display: ${(props) => props.display};
`;

const Small400 = styled.h2<{ display: string; color: string }>`
  font-family: ${(props) => props.theme.typography.small400.fontFamily};
  font-size: ${(props) => props.theme.typography.small400.fontSize};
  line-height: ${(props) => props.theme.typography.small400.lineHeight};
  font-weight: ${(props) => props.theme.typography.small400.fontWeight};
  color: ${(props) => props.color};
  display: ${(props) => props.display};
`;

type TextType = 'h2' | 'paragraph500' | 'small500' | 'small400';
type TextColor = 'white' | 'grey' | 'accent' | 'primary';

interface TextProps {
  children?: React.ReactNode;
  type: TextType;
  display?: 'inline-flex' | 'block';
  color?: TextColor;
}

const handleColors = (color: string): string => {
  if (color === 'white') return theme.colors.core.white;
  else if (color === 'grey') return theme.colors.core.grey;
  else if (color === 'accent') return theme.colors.brand.accent;
  else if (color === 'primary') return theme.colors.brand.primary;
  return theme.colors.core.white;
};

const Text = ({
  children,
  color = 'white',
  display = 'inline-flex',
  type,
}: TextProps) => {
  const colorResult = handleColors(color);

  if (type === 'h2')
    return (
      <Heading2 display={display} color={colorResult}>
        {children}
      </Heading2>
    );
  else if (type === 'paragraph500')
    return (
      <Paragraph500 display={display} color={colorResult}>
        {children}
      </Paragraph500>
    );
  else if (type === 'small500')
    return (
      <Small500 display={display} color={colorResult}>
        {children}
      </Small500>
    );
  else if (type === 'small400')
    return (
      <Small400 display={display} color={colorResult}>
        {children}
      </Small400>
    );
  return null;
};

export default Text;
