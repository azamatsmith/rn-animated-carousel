import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import ImageList from './components/ImageList';
import Pagination from './components/Pagination';
import ScrollTitle from './components/ScrollTitle';
import SideText from './components/SideText';

// import data from './data';

const StyledHome = styled.View`
  flex: 1;
`;

function Home() {
  return (
    <StyledHome>
      <SideText />
      <ImageList />
      <ScrollTitle />
      <Pagination />
    </StyledHome>
  );
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
