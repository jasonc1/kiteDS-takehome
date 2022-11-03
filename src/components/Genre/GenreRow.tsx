import React from 'react';
import styled from 'styled-components';
import { Genre } from '../../App';
import ContentCard from '../Card/ContentCard';
import ViewAll from '../Card/ViewAll';
import Text from '../Text/Text';

const StyledGenre = styled.div`
  min-height: 180px;
  margin-top: 8px;
  display: inline-flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 4px;
`;

interface GenreProps extends Genre {
  onClick: () => void;
  expanded: boolean;
}

const GenreRow = ({ expanded, title, media, onClick }: GenreProps) => {
  return (
    <>
      <Text type="h2" display="block">
        {title}
      </Text>
      <StyledGenre>
        <ViewAll expanded={expanded} onClick={onClick} />
        {media.map((mediaItem, i) => (
          <ContentCard
            imgURL={mediaItem.imgURL}
            imageAltText={mediaItem.imageAltText}
            title={mediaItem.title}
            episodes={mediaItem.episodes}
          />
        ))}
      </StyledGenre>
    </>
  );
};

export default GenreRow;
