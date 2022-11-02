import React, { useState } from 'react';
import styled from 'styled-components';
import Text from './components/Text/Text';
import Nav from './components/Nav/Nav';
import NavElement from './components/Nav/Nav';

const StyledApp = styled.div`
  height: 100vh;
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledDiv = styled.div`
  background-color: ${(props) => props.theme.colors.core.background};
  padding: 120px 80px;
  width: 800px;
`;

const defaultNavList = [
  { text: 'Featured', active: false },
  { text: 'Movies', active: false },
  { text: 'TV Shows', active: true },
  { text: 'Networks', active: false },
  { text: 'Kids', active: false },
];

const App = () => {
  const [navList, setNavList] = useState(defaultNavList);

  return (
    <StyledApp>
      <StyledDiv>
        <Text type="h2" display="block">
          this is a test component
        </Text>
        <Text type="paragraph500" display="block">
          this is a test component
        </Text>
        <Text type="small500" display="block">
          THIS IS A TEST
        </Text>
        <Text type="small400" display="block">
          THIS IS A TEST
        </Text>

        <Nav items={navList} />
      </StyledDiv>
    </StyledApp>
  );
};

export default App;
