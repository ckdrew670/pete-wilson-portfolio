import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import TextLink from './links/text-link';
import TagList from './tag-list';
import { mq } from './_shared/media';
import { StyledH1, StyledH2 } from './_shared/styled-headings';
import { StyledImageContainer } from './_shared/styled-image-container';
import { flexCenter } from './_shared/styled-mixins';
import { StyledSection } from './_shared/styled-section';
import { StyledTextSection } from './_shared/styled-text-section';

const Soundcloud = ({ data }) => {
    const soundcloud = data.map((item) => {
      const { title, tags, description, date, url, publisher, catalogue_number } = item.node.frontmatter;
      const coverImage = item.node.frontmatter.cover_image
        ? item.node.frontmatter.cover_image.childImageSharp.fluid
        : null;
  
      const link = url;
  
      const month = new Date(date).toLocaleDateString('en-EN', { month: 'short' });
      const day = new Date(date).toLocaleDateString('en-EN', { day: '2-digit' });
  
      return (
        <StyledAlbumContainer key={title}>
          <StyledDateOverlay>
            <span>{month}</span>
            <span>{day}</span>
          </StyledDateOverlay>
          <Link to={link} aria-label={`recent album ${title}`}>
            <StyledImageContainer>{coverImage && <Img fluid={coverImage} />}</StyledImageContainer>
          </Link>
          <StyledTitleLink to={link}>
            <StyledH2>{title}</StyledH2>
          </StyledTitleLink>
          <StyledAlbumText>
            <p>{description}</p>
          </StyledAlbumText>
          <StyledAlbumDetailsList>
              <p><span>Publisher:</span> {publisher} ({catalogue_number})</p>
          </StyledAlbumDetailsList>
          <TagList tags={tags} />
        </StyledAlbumContainer>
      );
    });
  
    return (
      <StyledSection id="Soundcloud" angle={10}>
        <StyledAlbumH1>Soundcloud</StyledAlbumH1>
        <StyledSoundcloudContainer>{Soundcloud}</StyledSoundcloudContainer>
        <StyledAlbumLinkContainer>
          <TextLink label="View All Soundcloud" link="/Soundcloud" />
        </StyledAlbumLinkContainer>
      </StyledSection>
    );
  };
  
  Soundcloud.propTypes = {
    data: PropTypes.array.isRequired,
  };
  
  export default Soundcloud;