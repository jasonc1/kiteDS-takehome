import React, { useState } from 'react';
import styled from 'styled-components';
import Text from './components/Text/Text';
import Nav, { NavElementType } from './components/Nav/Nav';
import ContentCard from './components/Card/ContentCard';
import ViewAll from './components/Card/ViewAll';
import GenreRow from './components/Genre/GenreRow';
import exp from 'constants';

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
  min-height: 180px;
  margin-top: 24px;
  display: inline-flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 4px;
`;

const defaultNavList: NavElementType[] = [
  { id: 'Featured', active: false },
  { id: 'Movies', active: false },
  { id: 'TV Shows', active: true },
  { id: 'Networks', active: false },
  { id: 'Kids', active: false },
];

export interface Genre {
  title: string;
  media: MediaItem[];
}

export interface MediaItem {
  imgURL: string;
  imageAltText?: string;
  title: string;
  episodes: number;
}

const contentList: Genre[] = [
  {
    title: 'Comedy',
    media: [
      {
        imgURL:
          'https://media.cnn.com/api/v1/images/stellar/prod/210721150408-02-ted-lasso-jason-sudeikis.jpg?q=x_3,y_0,h_1665,w_2959,c_crop/h_720,w_1280',
        imageAltText: 'ted lasso',
        title: 'Ted Lasso',
        episodes: 22,
      },
      {
        imgURL:
          'https://api.time.com/wp-content/uploads/2020/04/GettyImages-464382604.jpg',
        imageAltText: 'parks n rec',
        title: 'Parks & Recreation',
        episodes: 126,
      },
      {
        imgURL:
          'https://1.bp.blogspot.com/-nOftZZtUaGo/XuAH3jl-ciI/AAAAAAAATbg/uvTD18iFKwgL3m7HczM1aZ8nNDewU4HXwCK4BGAsYHg/s1500/Space%2BForce1a.jpg',
        imageAltText: 'space force',
        title: 'Space Force',
        episodes: 17,
      },
    ],
  },
  {
    title: 'Drama',
    media: [
      {
        imgURL:
          'https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/19/1526054334-top-boy.jpeg',
        imageAltText: 'top boy',
        title: 'Top Boy',
        episodes: 26,
      },
      {
        imgURL:
          'https://images.immediate.co.uk/production/volatile/sites/3/2022/05/succession-season-3-key-art-7ccf9c4.jpg?',
        imageAltText: 'succession',
        title: 'Succession',
        episodes: 29,
      },
      {
        imgURL:
          'https://deadline.com/wp-content/uploads/2018/04/suits-finale-5.jpg?',
        imageAltText: 'suits',
        title: 'Suits',
        episodes: 114,
      },
    ],
  },
];

/*
async function fetchContentJSON() {
  const response = await fetch('/some-content-endpoint');
  const content = await response.json();
  return content;
}
fetchContentJSON().then(content => {
  content; // fetched content
});

*/

const App = () => {
  const [navList, setNavList] = useState(defaultNavList);
  const [expandComedy, setExpandComedy] = useState(false);
  const [expandDrama, setExpandDrama] = useState(false);

  const handleExpandComedy = () => {
    setExpandComedy(!expandComedy);
  };

  const handleExpandDrama = () => {
    setExpandDrama(!expandDrama);
  };

  const updateActive = (id: string) => {
    let temp: NavElementType[] = []; // not space efficient.
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
        <Nav items={navList} updateNav={updateActive} />

        <GenreRow
          onClick={handleExpandComedy}
          expanded={expandComedy}
          title={contentList[0].title}
          media={contentList[0].media}
        />

        <GenreRow
          onClick={handleExpandComedy}
          expanded={expandComedy}
          title={contentList[1].title}
          media={contentList[1].media}
        />

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
      </StyledDiv>
    </StyledApp>
  );
};

export default App;
