import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { Animated, Dimensions } from 'react-native';

import Circle from './components/Circle';
import Page from './components/Page';
import Pagination from './components/Pagination';
import ScrollTitle from './components/ScrollTitle';
import SideText from './components/SideText';

import data from './data';

const CircleContainer = styled.View`
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

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
      <CircleContainer>
        {data.map(({ color }, i) => (
          <Circle
            key={i}
            color={color}
            index={i}
            scrollX={scrollX}
            width={WIDTH}
          />
        ))}
      </CircleContainer>
      <ScrollTitle data={data} scrollX={scrollX} width={WIDTH} />
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
      <Pagination data={data} scrollX={scrollX} width={WIDTH} />
    </StyledHome>
  );
}

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
