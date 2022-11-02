import React from 'react';
import styled from 'styled-components';

const Heading2 = styled.h2`
  font-family: ${(props) => props.theme.typography.h2.fontFamily};
  font-size: ${(props) => props.theme.typography.h2.fontSize};
  line-height: ${(props) => props.theme.typography.h2.lineHeight};
  font-weight: ${(props) => props.theme.typography.h2.fontWeight};
  letter-spacing: 0.03em;
  color: ${(props) => props.theme.colors.brand.primary};
`;

const App = () => {
  return <Heading2>Hello Styled Components</Heading2>;
};

export default App;
