import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components/native';
import { Animated } from 'react-native';

const StyledPage = styled.View`
  align-items: center;
  flex: 1;
  padding: 80px 30px 20px;
`;

const StyledImage = styled(Animated.Image)`
  resize-mode: contain;
  height: ${({ width }) => width * 0.75}px;
  width: ${({ width }) => width * 0.75}px;
  flex: 0.6;
`;

const Title = styled(Animated.Text)`
  font-size: 22px;
  line-height: 30px;
  font-weight: 800;
  text-align: left;
  text-transform: uppercase;
`;

const TextContainer = styled.View`
  flex: 0.5;
  padding-horizontal: 20px;
`;

const Description = styled(Animated.Text)`
  font-size: 18px;
  line-height: 24px;
`;

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
        width={width}
        source={item.image}
        style={{ transform: [{ scale }] }}
      />
      <TextContainer>
        <Title style={{ opacity, transform: [{ translateX: titleX }] }}>
          {item.title}
        </Title>
        <Description
          style={{ opacity, transform: [{ translateX: descriptionX }] }}
        >
          {item.description}
        </Description>
      </TextContainer>
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
