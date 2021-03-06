import styled from '@emotion/styled';
import { mq } from './media';

export const StyledImageContainer = styled.div`
  width: 96%;
  height: auto;
  position: relative;

  & .gatsby-image-wrapper * {
    transition: transform var(--transition-fast) ease-in-out !important;
  }

  &:hover .gatsby-image-wrapper * {
    transform: scale(1.1);
  }
`;

export const StyledStaticImageContainer = styled.div`
  width: 96%;
  height: auto;
  position: relative;

  .gatsby-image-wrapper {
    overflow: unset !important;
  }

  .gatsby-image-wrapper:before {
    content: '';
    position: absolute;
    bottom: -10px;
    right: -10px;
    width: 98%;
    height: 98%;
    border: 2px solid var(--primary-color);
    transition: all ease var(--transition-fast);
  }
`;
