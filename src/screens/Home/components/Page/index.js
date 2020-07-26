import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { Animated } from 'react-native';

const StyledPage = styled.View`
  align-items: center;
  flex: 1;
  padding: 20px 40px;
`;

const StyledImage = styled(Animated.Image)`
  height: 300px;
  width: 300px;
`;

const Title = styled(Animated.Text)`
  font-size: 20px;
  font-weight: 800;
  text-align: left;
  width: 100%;
`;

const Description = styled(Animated.Text)``;

function Page({ index, item, scrollX, width }) {
  const inputRange = [(index - 1) * width, index * width, (index + 1) * width];
  const inputRangeOpacity = [
    (index - 0.3) * width,
    index * width,
    (index + 0.3) * width,
  ];

  const scale = scrollX.interpolate({
    inputRange,
    outputRange: [0, 1, 0],
  });

  const titleX = scrollX.interpolate({
    inputRange,
    outputRange: [width * 0.2, 0, -width * 0.2],
  });

  const descriptionX = scrollX.interpolate({
    inputRange,
    outputRange: [width * 0.6, 0, -width * 0.6],
  });

  const opacity = scrollX.interpolate({
    inputRange: inputRangeOpacity,
    outputRange: [0, 1, 0],
  });

  return (
    <StyledPage style={{ width }}>
      <StyledImage
        source={item.image}
        resizeMode="contain"
        style={{ transform: [{ scale }] }}
      />
      <Title style={{ opacity, transform: [{ translateX: titleX }] }}>
        {item.title}
      </Title>
      <Description
        style={{ opacity, transform: [{ translateX: descriptionX }] }}
      >
        {item.description}
      </Description>
    </StyledPage>
  );
}

Page.propTypes = {
  index: PropTypes.number.isRequired,
  item: PropTypes.shape({
    description: PropTypes.string.isRequired,
    image: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  scrollX: PropTypes.any.isRequired,
  width: PropTypes.number.isRequired,
};

Page.defaultProps = {};

export default Page;
