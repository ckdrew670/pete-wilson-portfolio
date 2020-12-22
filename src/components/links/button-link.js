import styled from '@emotion/styled';
import React from 'react';
import Icon from '../icon';
import { flexCenter } from './../_shared/styled-mixins';
import { mq } from './../_shared/media';

export const StyledButtonLink = styled.a`
  ${flexCenter};
  text-decoration: none;
  color: var(--bg-content-color) !important;
  background-color: var(--title-color);
  font-size: 0.8rem;
  font-weight: 500;
  white-space: nowrap;
  position: relative;
  border-bottom: 3px solid;
  transition: all ease var(--transition-fast);
  padding: 0.6rem 1rem;
  margin: 0.4rem 0;
  z-index: 100;
  width: 8rem;
  max-width: 6rem;

  ${mq.gt.xs} {
      max-width: 8rem;
  }

  &:hover {
    color: var(--primary-color) !important;
    background-color: var(--bg-color) !important;
    border-bottom: 3px solid var(--primary-color);
    transition: all ease var(--transition-fast);
  }

  & > svg {
    fill: var(--bg-content-color);
    height: 0.8rem;
    margin-left: 0.6rem;
    transition: all ease var(--transition-fast);
  }

  &:hover > svg {
    fill: var(--primary-color);
    transition: margin-left ease var(--transition-fast);
    margin-left: 1rem;
  }
`;

const ButtonLink = ({ label, link }) => {
  return (
    <React.Fragment>
      {label && link && (
        <StyledButtonLink href={link ? link : '#'} target="_blank" rel="noopener">
          {label}
          <Icon icon="arrow-right" />
        </StyledButtonLink>
      )}
    </React.Fragment>
  );
};

export default ButtonLink;
