import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import ButtonLink from './links/button-link';
import { mq } from './_shared/media';
import { StyledSection } from './_shared/styled-section';
import Img from 'gatsby-image';

const StyledHeroSection = styled(StyledSection)`
  padding: 0 !important;
  margin: 0;
  width: 100% !important;
  max-width: 100% !important;
  height: 100vh;
`;

const StyledBgImage = styled(Img)`
  position: absolute !important;
  top: 0;
  left: 0;
  width: 100%;
  z-index: -1;
  height: 100% !important;

  & > img {
      object-fit: cover !important;
      object-position: 0% 0% !important;
  }
`;

const StyledHeroContent = styled.div`
  position: absolute;
  top: 9rem;
  left: 0;
  padding-left: 1rem;

  ${mq.gt.xs} {  
    top: 14rem;
    padding-left: 4rem;
  }
  ${mq.gt.sm} {  
    top: 16rem;
    padding-left: 6rem;
  }
  ${mq.gt.md} {  
    top: 16rem;
    padding-left: 10rem;
  }
`;

const StyledAuthor = styled.h1`
  text-align: left;
  font-size: 35px;
  line-height: 1.1;
  margin: 0;
  word-break: break-word;

  ${mq.gt.xs} {
    font-size: 2.4rem;
  }

  ${mq.gt.sm} {
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
  max-width: 70%;

  ${mq.gt.xs} {
    font-size: 2.4rem;
    max-width: 60%;
  }
  ${mq.gt.sm} {
    font-size: 2.8rem;
  }
  ${mq.gt.md} {
    font-size: 3.4rem;
    max-width: 70%;
  }
  ${mq.gt.lg} {
    font-size: 3.4rem;
  }
`;

const Hero = ({ data }) => {
  const { author, tagline, ctaLink, ctaLabel, imageMobile, imageDesktop } = data;

  // the following allows for art direction
  const sources = [
    imageMobile.childImageSharp.fluid,
    {
        ...imageDesktop.childImageSharp.fluid,
        media: `(min-width: 1279px)`,
    },
  ];

  return (
    <StyledHeroSection>
        <StyledBgImage fluid={sources} alt="Pete Wilson"/>
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
