import styled from '@emotion/styled';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import PropTypes from 'prop-types';
import React from 'react';
import TagList from './tag-list';
import { contentBox } from './_shared/styled-mixins';

const StyledPostTags = styled.div`
  pointer-events: none;
  margin: 1rem 0 0;
  padding: 0 var(--space);
  position: relative;
  z-index: 2;
`;
const StyledListenLink = styled(Link)`
  color: var(--primary-color);
  background: transparent;
  display: flex;
  align-items: flex-end;
  flex-grow: 1;
  padding: 0 var(--space) var(--space);
  padding-bottom: 0;
  position: relative;

  &:hover {
    color: var(--primary-color) !important;

    & > span {
      text-decoration: underline;
    }
  }
`;
const StyledCoverImageContainer = styled.div`
  padding: var(--space) var(--space) 0;
`;
const StyledPublishingDate = styled.div`
  margin-bottom: 1rem;
  color: var(--title-color);
  font-size: 0.8rem;
  font-weight: 500;
`;
const StyledContent = styled.div`
  padding: 0 var(--space);
`;
const StyledTitle = styled.h2`
  color: var(--primary-color);
  margin: 1rem 0;
`;
const StyledDescription = styled.p`
  color: var(--title-color);
`;
const StyledPostCard = styled.article`
  ${contentBox}
  display: flex;
  flex-direction: column;
  position: relative;
  color: var(--title-color);
  margin-bottom: 1rem;
  padding: 0;
  min-width: 100%;
  padding-bottom: 1rem;

  > a {
    text-decoration: none;
  }

  &:first-of-type {
      margin-top: 2rem;
  }
`;

const PostCard = ({ title, date, description, link, coverImage, tags, publisher, catalogue_number }) => {
//   const tagsList = tags.map(tag => <PostTag key={tag} tag={tag} />);

  return (
    <StyledPostCard>
      <Link to={link}>
        <StyledCoverImageContainer>{coverImage && <Img fluid={coverImage} />}</StyledCoverImageContainer>
      </Link>
      
      <StyledContent>
        <Link to={link}>
            <StyledTitle>{title}</StyledTitle>
        </Link>
        <StyledPublishingDate>Published by {publisher} ({catalogue_number}) on {date}.</StyledPublishingDate>
        <StyledDescription>{description}</StyledDescription>
      </StyledContent>
      <StyledListenLink to={link}>
        <span>Listen</span>
      </StyledListenLink>
      <StyledPostTags>
        <TagList tags={tags} />
      </StyledPostTags>
    </StyledPostCard>
  );
};

const coverImageShape = PropTypes.shape({
  aspectRatio: PropTypes.number,
  base64: PropTypes.string,
  sizes: PropTypes.string,
  src: PropTypes.string,
  srcSet: PropTypes.string,
});

PostCard.propTypes = {
  coverImage: coverImageShape,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  tags: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
};

export default PostCard;
