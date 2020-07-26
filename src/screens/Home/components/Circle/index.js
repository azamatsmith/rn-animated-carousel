import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { Animated } from 'react-native';

const StyledCircle = styled(Animated.View)`
  border-radius: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  width: ${({ size }) => size}px;
  position: absolute;
`;

function Circle({ color, index, scrollX, width }) {
  const inputRange = [
    width * (index - 0.55),
    width * index,
    width * (index + 0.55),
  ];

  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
    extrapolate: 'clamp',
  });

  const opacity = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });

  const size = width * 0.75;
  return (
    <StyledCircle
      size={size}
      style={{
        backgroundColor: color,
        opacity,
        transform: [{ scale }, { translateY: '-90%' }],
      }}
    />
  );
}

Circle.propTypes = {};

Circle.defaultProps = {};

export default Circle;
