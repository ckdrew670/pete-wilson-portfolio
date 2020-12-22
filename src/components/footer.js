import { css } from '@emotion/core';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import SocialIcons from './social-icons';
import { socialIconList } from './_config/social-icon-list';
import { mq } from './_shared/media';
import { flexCenter } from './_shared/styled-mixins';

const marginMediaQuery = css`
  ${mq.gt.xs} {
    margin-top: 0;
  }
`;
const StyledFooter = styled.footer`
  ${flexCenter};
  flex-direction: column;
  background-color: var(--bg-content-color);
  padding-top: 0;
  padding-bottom: 5rem;
  text-align: center;
  font-size: 0.8rem;

  ${mq.gt.xs} {
    padding: 2rem;
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  ${mq.gt.sm} {
    flex-direction: row-reverse;
    justify-content: space-between;
  }
`;

const StyledSocialContainer = styled.div`
  ${flexCenter};
  flex-direction: column;
  margin-top: 1rem;
  ${marginMediaQuery};

  ${mq.gt.xs} {
      margin-bottom: 3rem;
    > div {
      margin-right: 0.5rem;
    }
    flex-direction: row-reverse;
    align-items: center;
  }
`;
const StyledCopyright = styled.span`
  font-weight: 500;
  ${mq.gt.xs} {
    margin-right: 0.8rem;
    margin-bottom: 0;
  }
`;
const StyledRotator = styled.div`
  ${flexCenter};
  margin: 0;
  font-size: 0.6rem;

  & > span {
    margin-left: 0.25rem;
  }

  ${mq.gt.xs} {
    margin: 0;
    margin-bottom: 3rem;
  }
  ${mq.gt.sm} {
    font-size: 0.8rem;
  }
`;

const Footer = ({ author }) => {
  return (
    <StyledFooter>
      <StyledSocialContainer>
        <StyledCopyright>
          © {new Date().getFullYear()} {author}
        </StyledCopyright>
        <SocialIcons icons={socialIconList} />
      </StyledSocialContainer>
      <StyledRotator>
        <p style={{ marginBottom: 0 }}>Site built by Charlotte Drew using <Link to={`https://www.gatsbyjs.com/starters/Knochenmark/gatsby-starter-level-2`}>this Gatsby theme.</Link></p>
      </StyledRotator>
    </StyledFooter>
  );
};

Footer.propTypes = {
  author: PropTypes.string,
};

Footer.defaultProps = {
  siteTitle: '',
};

export default Footer;
