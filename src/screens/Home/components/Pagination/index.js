import React from 'react';
import styled from 'styled-components/native';
import { Animated } from 'react-native';

const DOT_SIZE = 40;

const Container = styled.View`
  flex-direction: row;
  bottom: 40px;
  position: absolute;
  right: 40px;
`;

const Dot = styled.View`
  align-items: center;
  justify-content: center;
  height: ${DOT_SIZE}px;
  width: ${DOT_SIZE}px;
`;

const SmallDot = styled.View`
  border-radius: ${DOT_SIZE / 4}px;
  height: ${DOT_SIZE / 2}px;
  width: ${DOT_SIZE / 2}px;
`;

const ActiveCircle = styled(Animated.View)`
  border-width: 2px;
  border-color: #ddd;
  position: absolute;
  top: 0;
  left: 0;
  height: ${DOT_SIZE}px;
  width: ${DOT_SIZE}px;
  border-radius: ${DOT_SIZE / 2}px;
`;

function Pagination({ data, scrollX, width }) {
  const translateX = scrollX.interpolate({
    inputRange: [-width, 0, width],
    outputRange: [-DOT_SIZE, 0, DOT_SIZE],
  });
  return (
    <Container>
      <ActiveCircle style={{ transform: [{ translateX }] }} />
      {data.map(({ color }) => {
        return (
          <Dot key={color}>
            <SmallDot style={{ backgroundColor: color }} />
          </Dot>
        );
      })}
    </Container>
  );
}

Pagination.propTypes = {};

Pagination.defaultProps = {};

export default Pagination;
