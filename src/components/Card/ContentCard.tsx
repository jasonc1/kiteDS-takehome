import React, { useState } from 'react';
import styled from 'styled-components';
import { MediaItem } from '../../App';
import Text from '../Text/Text';

const StyledContentCard = styled.button`
  height: 120px;
  width: 150px;
  background-color: transparent;
  border: none;
  padding: 0px;
  transition: 0.3s height, 0.3s width;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
  &:hover,
  :focus {
    height: 132px;
    width: 165px;
  }
`;

const StyledDetails = styled.div`
  position: absolute;
  margin-top: 8px;
  text-align: left;
`;

const ContentCard = ({ imgURL, imageAltText, title, episodes }: MediaItem) => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(true);
  };

  const onLeave = () => {
    setHover(false);
  };
  return (
    <StyledContentCard
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      role="button"
    >
      <img src={imgURL} alt={imageAltText} />
      {hover && (
        <StyledDetails>
          <Text type="paragraph500" display="block">
            {title}
          </Text>
          <Text type="small400" display="block">{`${episodes} EPISODES`}</Text>
        </StyledDetails>
      )}
    </StyledContentCard>
  );
};

export default ContentCard;
