import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import ButtonLink from './links/button-link';
import { mq } from './_shared/media';
import { StyledSection } from './_shared/styled-section';
import heroDesktop from '../images/hero-background.jpg';
import heroMobile from '../images/hero-background2.jpg';

const StyledHeroSection = styled(StyledSection)`
  min-height: 100vh;
  position: relative;
  background: url(${ heroMobile }) no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  margin: 0;
  max-width: 100%;
  width: 100%;
  align-items: flex-start;
  text-align: left;
  padding-left: 2rem;

  ${mq.gt.xs} {
    padding-left: auto;
  }
  ${mq.gt.sm} {
    padding-left: 10rem;
  }
  ${mq.gt.md} {
    background: url(${ heroDesktop }) no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    min-height: 105vh;
  }
`;
const StyledAuthor = styled.h1`
  margin-left: -4px !important;
  text-align: left;
  font-size: 35px;
  line-height: 1.1;
  margin: 0;
  word-break: break-word;

  ${mq.gt.xs} {
    font-size: 2.8rem;
  }

  ${mq.gt.md} {
    font-size: 3.4rem;
    margin-top: -10rem;
  }
`;
const StyledTagline = styled.h2`
  margin-left: -4px !important;
  max-width: 80%;
  font-size: 35px;
  line-height: 1.1;
  margin: 0;
  color: var(--primary-color);
  word-break: break-word;

  ${mq.gt.xs} {
    font-size: 2.8rem;
    max-width: 60%;
  }

  ${mq.gt.md} {
    font-size: 3.4rem;
    max-width: 50%;
  }
  ${mq.gt.lg} {
    font-size: 3.4rem;
    max-width: 40%;
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
