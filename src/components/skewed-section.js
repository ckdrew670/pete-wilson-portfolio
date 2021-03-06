import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import { mq } from './_shared/media';

const skewNumber = 0.09719;
const StyledSkewedSection = styled.section`
  margin: 4rem 0;
  position: relative;
  padding: calc(100% * ${skewNumber}) 0;
  
  ${mq.gt.xs} {
    padding-left: 2rem;
    padding-right: 2rem;
  }
  ${mq.gt.sm} {
    padding-left: 4rem;
    padding-right: 4rem;
  }

  & > .content {
    max-width: 1000px;
    margin: 0 auto;
    padding: 1.5em;
    position: relative;
    
    /* uncomment for debuggind purposes */
    /* border: 2px dashed #fff8; */
  }

  &:after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    transform: skewy(-11deg);
    transform-origin: 50% 0;
    outline: 1px solid transparent;
    backface-visibility: hidden;
    background-color: var(--bg-content-color);
  }
`;

// x = tan(α) * a / 2

const SkewedSection = (props) => {
//   console.log('angle', props.angle);

  return (
    <StyledSkewedSection>
      <div id={props.id} className="content">{props.children}</div>
    </StyledSkewedSection>
  );
};

SkewedSection.propTypes = {
  angle: PropTypes.number,
};

SkewedSection.defaultProps = {
  angle: 10,
};

export default SkewedSection;
