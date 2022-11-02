import React, { useState } from 'react';
import styled from 'styled-components';
import Text from '../Text/Text';

const StyledContentCard = styled.button`
  height: 150px;
  width: 120px;
  background-color: transparent;
  border: none;
  transition: 0.3s height, 0.3s width;
  img {
    height: 100%;
    width: auto;
  }
  &:hover {
    height: 165px;
    width: 132px;
  }
`;

const StyledDetails = styled.div`
  position: absolute;
  margin-top: 8px;
`;

interface ContentCardProps {
  imgURL: string;
  imageAltText?: string;
  title: string;
  episodes: number;
}

const ContentCard = ({
  imgURL,
  imageAltText,
  title,
  episodes,
}: ContentCardProps) => {
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
