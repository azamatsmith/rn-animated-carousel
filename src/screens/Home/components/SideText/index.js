import React from 'react';
// import PropTypes from 'prop-types';
import styled from 'styled-components/native';

const HEIGHT = 60;
const WIDTH = 200;

const StyledText = styled.Text`
  position: absolute;
  bottom: 30px;
  left: 12px;
  height: ${HEIGHT}px;
  width: ${WIDTH}px;

  color: #bd0e14;
  letter-spacing: 2px;
  font-size: 40px;
  font-weight: 900;
  text-transform: uppercase;
`;

function SideText() {
  return (
    <StyledText
      style={{
        transform: [
          { translateX: -WIDTH / 2 },
          { translateY: -HEIGHT / 2 },
          { rotateZ: '-90deg' },
          { translateX: WIDTH / 2 },
          { translateY: HEIGHT / 2 },
        ],
      }}
    >
      Canon
    </StyledText>
  );
}

SideText.propTypes = {};

SideText.defaultProps = {};

export default SideText;
