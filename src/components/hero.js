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
  const { author, tagline, ctaLink, ctaLabel, imageMobile, imageDesktop } = data;
  const sources = [
    imageMobile.childImageSharp.fluid,
    {
        ...imageDesktop.childImageSharp.fluid,
        media: `${mq.gt.sm}`,
    },
  ];

  return (
    <StyledHeroSection>
        {console.log(imageMobile)}
        <StyledBgImage fluid={
            sources }/>
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
