import React, { useState } from 'react';
import styled from 'styled-components';
import Text from './components/Text/Text';
import Nav, { NavElementType } from './components/Nav/Nav';
import ContentCard from './components/Card/ContentCard';

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

const StyledRow = styled.div`
  min-height: 320px;
  margin-top: 80px;
`;

const defaultNavList: NavElementType[] = [
  { id: 'Featured', active: false },
  { id: 'Movies', active: false },
  { id: 'TV Shows', active: true },
  { id: 'Networks', active: false },
  { id: 'Kids', active: false },
];

const App = () => {
  const [navList, setNavList] = useState(defaultNavList);
  const updateActive = (id: string) => {
    let temp: NavElementType[] = [];
    navList.map((navItem: NavElementType) => {
      if (navItem.id === id) {
        console.log('bingo');
        temp.push({ ...navItem, active: true });
      } else temp.push({ ...navItem, active: false });
    });
    setNavList(temp);
  };

  return (
    <StyledApp>
      <StyledDiv>
        <Text type="h2" display="block">
          This is a header2 type style
        </Text>
        <Text type="paragraph500" display="block">
          This is a paragraph500 type style
        </Text>
        <Text type="small500" display="block">
          This is a small500 type style
        </Text>
        <Text type="small400" display="block">
          This is a small400 type style
        </Text>

        <Nav items={navList} updateNav={updateActive} />
        <StyledRow>
          {' '}
          <ContentCard
            imgURL="https://media.cnn.com/api/v1/images/stellar/prod/210721150408-02-ted-lasso-jason-sudeikis.jpg?q=x_3,y_0,h_1665,w_2959,c_crop/h_720,w_1280"
            title="Ted Lasso"
            episodes={22}
          />
        </StyledRow>

        <ContentCard
          imgURL="https://media.cnn.com/api/v1/images/stellar/prod/210721150408-02-ted-lasso-jason-sudeikis.jpg?q=x_3,y_0,h_1665,w_2959,c_crop/h_720,w_1280"
          title="Ted Lasso"
          episodes={22}
        />
      </StyledDiv>
    </StyledApp>
  );
};

export default App;
