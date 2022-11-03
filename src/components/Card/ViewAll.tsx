import React from 'react';
import styled from 'styled-components';
import { ReactComponent as ViewAllSVG } from '../../assets/viewAll.svg';
import { ReactComponent as CloseSVG } from '../../assets/close.svg';
import Text from '../Text/Text';

const StyledViewAll = styled.button`
  height: 120px;
  width: 112px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.brand.background};
  border: none;
  transition: 0.3s height, 0.3s width;
  &:hover,
  :focus {
    height: 132px;
    width: 120px;
  }
`;

interface ViewAllProps {
  expanded?: boolean;
  onClick: () => void;
}
const viewAllText = (
  <Text type="small500" display="block">
    VIEW ALL
  </Text>
);

const closeText = (
  <Text type="small500" display="block">
    VIEW LESS
  </Text>
);

const ViewAll = ({ expanded, onClick }: ViewAllProps) => {
  return (
    <StyledViewAll onClick={onClick}>
      {expanded ? <CloseSVG /> : <ViewAllSVG />}
      {expanded ? closeText : viewAllText}
    </StyledViewAll>
  );
};

export default ViewAll;
