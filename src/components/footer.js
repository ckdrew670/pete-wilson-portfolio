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
  padding: 4rem;
  text-align: center;
  font-size: 0.8rem;
  padding-bottom: 7rem;

  ${mq.gt.sm} {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 2rem;
    padding: 2rem;
  }
`;
const StyledSocialContainer = styled.div`
  ${flexCenter};
  flex-direction: column;
  align-items: center;
  margin-bottom: 2rem;

  ${marginMediaQuery};

  ${mq.gt.xs} {
    padding-bottom: 0.8rem;
    > div {
      margin-right: 0.5rem;
    }
  }
  ${mq.gt.sm} {
    flex-direction: row-reverse;
    align-items: center;
    padding: 0;
    margin-bottom: 0;
}
`;
const StyledCopyright = styled.span`
  font-weight: 500;
  margin-bottom: 0.8rem;
  ${mq.gt.xs} {
    margin-right: 0.8rem;
  }
  ${mq.gt.sm} {
    margin-bottom: 0;
  }
`;
const StyledRotator = styled.div`
  ${flexCenter};
  margin: 1rem 0;
  font-size: 0.7rem;

  & > span {
    margin-left: 0.25rem;
  }

  ${mq.gt.xs} {
    margin: 0;
    font-size: 0.7rem;
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
