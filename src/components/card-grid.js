import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import Img from 'gatsby-image';
import { mq } from './_shared/media';
import { StyledH1 } from './_shared/styled-headings';
import StyledSkewedSection from './skewed-section';
import { StyledStaticImageContainer } from './_shared/styled-image-container';

const StyledTextSection = styled.section`
  white-space: pre-line;
`;
const StyledFeatureGridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2.5rem;
  margin-top: 2.5rem;
  width: 100%;

  ${mq.gt.xs} {
    grid-template-columns: repeat(3, 1fr);
  }
  ${mq.gt.md} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
const StyledFeatureCard = styled.article`

  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
const StyledCardLabel = styled.h2`
  font-size: 1.5rem;
  margin: 1rem 0;
  color: var(--body-color);
`;
const StyledCardStaticImageContainer = styled(StyledStaticImageContainer)`
  width: 10rem;
`;
const StyledCreditsH1 = styled(StyledH1)`
  margin-top: 2rem;
`;

const CardGrid = ({ cards, description, title, id = null }) => {
  
  
  const featureCards = cards.map(({ card_image, label }, index) => {
    const image = card_image ? card_image.childImageSharp.fluid : null;
    return (
      <StyledFeatureCard key={index}>
        <StyledCardStaticImageContainer>
          <Img fluid={image} objectFit="contain" />
        </StyledCardStaticImageContainer>
      </StyledFeatureCard>
    );
  });
  
  return (
    <StyledSkewedSection id={id}>
      {title && <StyledCreditsH1>{title}</StyledCreditsH1>}
      <StyledTextSection dangerouslySetInnerHTML={{ __html: description }} />
      <StyledFeatureGridContainer>{featureCards}</StyledFeatureGridContainer>
    </StyledSkewedSection>
  );
};

CardGrid.propTypes = {
  cards: PropTypes.array.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.string,
  title: PropTypes.string,
};

export default CardGrid;
