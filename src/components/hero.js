import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import ButtonLink from './links/button-link';
import { mq } from './_shared/media';
import { StyledSection } from './_shared/styled-section';

const StyledHeroSection = styled(StyledSection)`
  min-height: calc(100vh -  var(--header-height));
  position: relative;
  background: url(/images/hero-background.jpg) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin: 0;
  max-width: 100%;
  width: 100%;
  align-items: center;
  text-align: center;

  ${mq.gt.xs} {
    min-height: 100vh;
    text-align: center;
  }
  ${mq.gt.sm} {
    min-height: 100vh;
    padding-left: 12rem;
    align-items: flex-start;
    text-align: left;
  }
`;
const StyledAuthor = styled.h1`
  margin-left: -4px !important;
  font-size: 40px;
  line-height: 1.1;
  margin: 0;
  word-break: break-word;

  ${mq.gt.xs} {
    font-size: 60px;
  }

  ${mq.gt.sm} {
    margin-top: -21rem;
  }
  
  ${mq.gt.md} {
    font-size: 80px;
  }
`;
const StyledTagline = styled.h2`
  margin-left: -4px !important;
  max-width: 80%;
  font-size: 40px;
  line-height: 1.1;
  margin: 0;
  color: var(--primary-color);
  word-break: break-word;

  ${mq.gt.xs} {
    font-size: 60px;
    max-width: 60%;
  }

  ${mq.gt.md} {
    font-size: 80px;
    max-width: 50%;
  }
`;

const Hero = ({ data }) => {
  const { author, tagline, ctaLink, ctaLabel } = data;

  return (
    <StyledHeroSection>
      <StyledAuthor>{author}</StyledAuthor>
      <StyledTagline>{tagline}</StyledTagline>
      <ButtonLink label={ctaLabel} link={ctaLink} />
    </StyledHeroSection>
  );
};

Hero.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Hero;
