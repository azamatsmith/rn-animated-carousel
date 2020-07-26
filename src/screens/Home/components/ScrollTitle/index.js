import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components/native';

import { Animated } from 'react-native';

const HEIGHT = 32;
const WIDTH = 320;

const Container = styled.View`
  position: absolute;
  top: 60px;
  left: 10px;
  overflow: hidden;
  width: ${WIDTH}px;
  height: ${HEIGHT}px;
`;

const ScrollText = styled(Animated.Text)`
  font-size: ${HEIGHT}px;
  line-height: ${HEIGHT}px;
  text-transform: uppercase;
  font-weight: 700;
`;

function ScrollTitle({ data, scrollX, width }) {
  return (
    <Container>
      {data.map(({ pageTitle }, index) => {
        const inputRange = [-width, 0, width];
        const translateY = scrollX.interpolate({
          inputRange,
          outputRange: [HEIGHT, 0, -HEIGHT],
        });
        return (
          <ScrollText key={index} style={{ transform: [{ translateY }] }}>
            {pageTitle}
          </ScrollText>
        );
      })}
    </Container>
  );
}

ScrollTitle.propTypes = {};

ScrollTitle.defaultProps = {};

export default ScrollTitle;
