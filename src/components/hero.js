import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import ButtonLink from './links/button-link';
import { mq } from './_shared/media';
import { StyledSection } from './_shared/styled-section';
import heroDesktop from '../images/hero-background.jpg';
import heroMobile from '../images/hero-background2.jpg';
import Img from 'gatsby-image';

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

const StyledBgImage = styled(Img)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: ${({height}) => height};
  z-index: -1;

  & > img {
      object-fit: cover !important;
      object-position: 0% 0% !important;
  }

  @media screen and (max-width: 600px) {
    height: ${({ mobileHeight }) => mobileHeight};
  }
`;

const StyledHeroContent = styled.div`
  position: absolute;
  top: 16rem;
  left: 12rem;
`;

const StyledAuthor = styled.h1`
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
  }
`;
const StyledTagline = styled.h2`
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
  }
  ${mq.gt.lg} {
    font-size: 3.4rem;
  }
`;

const Hero = ({ data }) => {
  const { author, tagline, ctaLink, ctaLabel } = data;

  return (
    <StyledHeroSection>
        <StyledBgImage fluid={image} height={height} mobileHeight={mobileHeight} objectFit="cover"/>
        <StyledHeroContent>
            <StyledAuthor>{author}</StyledAuthor>
            <StyledTagline>{tagline}</StyledTagline>
            <ButtonLink label={ctaLabel} link={ctaLink}/>
        </StyledHeroContent>
    </StyledHeroSection>
  );
};

Hero.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Hero;
