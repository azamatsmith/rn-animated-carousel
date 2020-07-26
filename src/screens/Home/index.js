import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { Animated, Dimensions } from 'react-native';

import Page from './components/Page';
import Pagination from './components/Pagination';
import ScrollTitle from './components/ScrollTitle';
import SideText from './components/SideText';

import data from './data';

const StyledHome = styled.View`
  flex: 1;
`;

const WIDTH = Dimensions.get('window').width;
// const HEIGHT = Dimensions.get('window').height;

function Home() {
  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <StyledHome>
      <SideText />
      <ScrollTitle />
      <Animated.FlatList
        data={data}
        renderItem={({ item, index }) => (
          <Page index={index} item={item} scrollX={scrollX} width={WIDTH} />
        )}
        keyExtractor={(item) => item.key.toString()}
        horizontal
        pagingEnabled
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
        showsHorizontalScrollIndicator={false}
      />
      <Pagination />
    </StyledHome>
  );
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
