import styled from '@emotion/styled';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import TextLink from './links/text-link';
import { mq } from './_shared/media';
import { StyledH1, StyledH2 } from './_shared/styled-headings';
import { flexCenter } from './_shared/styled-mixins';
import SkewedSection from './skewed-section';

const StyledSoundcloudPlaylistsContainer = styled.article`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 2.5rem;
  margin-top: 2.5rem;

  ${mq.gt.xs} {
    grid-template-columns: repeat(2, 1fr);
  }
`;
const StyledSoundcloudContainer = styled.article`
  position: relative;
  display: flex;
  flex-direction: column;
  border-radius: var(--radius);

  & .gatsby-image-wrapper {
    max-height: 400px;
  }
`;
const StyledTitleLink = styled(Link)`
  text-decoration: none;
  margin-top: 1rem;
  margin-bottom: -1rem;
  &:hover h2 {
    color: var(--primary-color);
  }
`;
const StyledSoundcloudLinkContainer = styled.div`
  ${flexCenter};
  width: 100%;
  margin-top: 2.5rem;
`;
const StyledIFrameContainer = styled.div`
`;
const StyledSoundcloudH1 = styled(StyledH1)`
  margin-top: 3rem;
`;

const Soundcloud = ({ data }) => {

    // get attributes from iframe element
    const getAttrs = (iframeTag) => {
        var doc = document.createElement('div');
        doc.innerHTML = iframeTag;
    
        const iframe = doc.getElementsByTagName('iframe')[0];
        return [].slice
        .call(iframe.attributes)
        .reduce((attrs, element) => {
            attrs[element.name] = element.value;
            return attrs;
        }, {});
    }
    const soundcloud = data.map((item) => {
    const { title, embed_code, url } = item.frontmatter;
    

    return (
        <StyledSoundcloudContainer key={title}>
          <StyledTitleLink to={url}>
            <StyledH2>{title}</StyledH2>
            <StyledIFrameContainer>
                <iframe {...getAttrs(embed_code) } />
            </StyledIFrameContainer>
          </StyledTitleLink>
        </StyledSoundcloudContainer>
      );
    });
  
    return (
            <SkewedSection id="soundcloud" angle={10}>
            <StyledSoundcloudH1>Listen</StyledSoundcloudH1>
            <StyledSoundcloudPlaylistsContainer>{soundcloud}</StyledSoundcloudPlaylistsContainer>
            <StyledSoundcloudLinkContainer>
                <TextLink label="More" link={'https://google.com'} />
            </StyledSoundcloudLinkContainer>
            </SkewedSection>
        );
};
  
Soundcloud.propTypes = {
    data: PropTypes.array.isRequired,
}

export default Soundcloud;