import styled from '@emotion/styled';
import { graphql, Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import Layout from '../components/layout';
import PostCard from '../components/post-card';
import { albumMenuLinks } from '../components/_config/menu-links';
import { StyledH1, StyledH2 } from '../components/_shared/styled-headings';
import { flexCenter } from '../components/_shared/styled-mixins';
import { StyledFullHeightSection } from '../components/_shared/styled-section';

const StyledTagsH1 = styled(StyledH1)`
  margin-top: 3rem;
`;

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const tagHeader = `${totalCount} album${totalCount === 1 ? '' : 's'}`;

  return (
    <Layout menuLinks={albumMenuLinks}>
      <StyledFullHeightSection>
        <StyledTagsH1>{tag}</StyledTagsH1>
        <StyledH2>{tagHeader}</StyledH2>
        <ul>
          {edges.map(({ node }) => {
            const coverImage = node.frontmatter.cover_image ? node.frontmatter.cover_image.childImageSharp.fluid : null;
            return (
                <PostCard
                key={node.frontmatter.title}
                coverImage={coverImage}
                title={node.frontmatter.title}
                date={node.frontmatter.date}
                description={node.frontmatter.description}
                link={node.frontmatter.url}
                tags={node.frontmatter.tags}
                publisher={node.frontmatter.publisher}
                catalogue_number={node.frontmatter.catalogue_number}
                />
            );
          })}
        </ul>
      </StyledFullHeightSection>
    </Layout>
  );
};

Tags.propTypes = {
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }),
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      totalCount: PropTypes.number.isRequired,
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            frontmatter: PropTypes.shape({
              title: PropTypes.string.isRequired,
            }),
            fields: PropTypes.shape({
              slug: PropTypes.string.isRequired,
            }),
          }),
        }).isRequired
      ),
    }),
  }),
};

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: {
        fileAbsolutePath: { regex: "/content/albums/" }
        frontmatter: { tags: { in: [$tag] } }
      }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            tags
            date(formatString: "D MMMM, YYYY")
            description
            url
            publisher
            catalogue_number
            cover_image {
              childImageSharp {
                fluid(maxWidth: 800) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`;
