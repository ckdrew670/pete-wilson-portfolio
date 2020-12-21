import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import About from '../components/about';
import CardGrid from '../components/card-grid';
import Contact from '../components/contact';
import Hero from '../components/hero';
import Layout from '../components/layout';
import Albums from '../components/albums';
import SEO from '../components/seo';
import Soundcloud from '../components/soundcloud';
import { indexMenuLinks } from '../components/_config/menu-links';

const Index = ({ data }) => {
  const heroData = {
    author: data.site.siteMetadata.author,
    tagline: data.hero.frontmatter.tagline,
    description: data.hero.html,
    introduction: data.hero.frontmatter.introduction,
    ctaLabel: data.hero.frontmatter.cta_label,
    ctaLink: data.hero.frontmatter.cta_link,
  };

  return (
    <Layout menuLinks={indexMenuLinks}>
      <SEO title="Home" />
      <Hero data={heroData} />
      <Albums data={data.albums.edges} />
      { console.log(`index ${data.soundcloud.nodes}`) }
      <Soundcloud data={data.soundcloud.nodes} />
      <About data={data.about} />
      <CardGrid cards={data.cards.nodes[0].frontmatter.cards} description={data.cards.nodes[0].html} title="Credits" id="credits" />
      
      <Contact data={data.contact} />
    </Layout>
  );
};

Index.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Index;

export const query = graphql`
  {
    site {
      siteMetadata {
        author
      }
    }

    hero: markdownRemark(fileAbsolutePath: { regex: "/content/sections/hero/" }) {
      frontmatter {
        introduction
        tagline
        cta_label
        cta_link
      }
      html
    }

    about: markdownRemark(fileAbsolutePath: { regex: "/content/sections/about/" }) {
      frontmatter {
        title
        about_image {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      html
    }

    cards: allMarkdownRemark(
      limit: 20
      filter: { fileAbsolutePath: { regex: "/content/cards/" } }
    ) {
      nodes {
        frontmatter {
            cards {
              label
              card_image {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
        }
        html
      }
    }

    soundcloud: allMarkdownRemark(
        limit: 20
        filter: { fileAbsolutePath: { regex: "/content/soundcloud/" } }
      ) {
        nodes {
          frontmatter {
            title
          }
          html
        }
      }

    albums: allMarkdownRemark(
        sort: { order: DESC, fields: frontmatter___date }
        limit: 20
        filter: { fileAbsolutePath: { regex: "/content/albums/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
              date(formatString: "D MMMM, YYYY")
              tags
              description
              url
              publisher
              catalogue_number
              cover_image {
                childImageSharp {
                  fluid(maxWidth: 400) {
                    ...GatsbyImageSharpFluid
                    ...GatsbyImageSharpFluidLimitPresentationSize
                  }
                }
              }
            }
            excerpt
            fields {
              slug
            }
          }
        }
      }

    contact: markdownRemark(fileAbsolutePath: { regex: "/content/sections/contact/" }) {
      frontmatter {
        phone
        email
        address
      }
      html
    }
  }
`;
