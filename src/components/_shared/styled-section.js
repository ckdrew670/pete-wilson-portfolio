import styled from '@emotion/styled';
import { mq } from './media';

export const StyledSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 0 auto;
  width: 85%;
  max-width: 1000px;
  margin-bottom: 60px;

  ${mq.gt.sm} {
    padding: 1.5rem;
    padding-top: 3rem;
  }
`;

export const StyledFullHeightSection = styled(StyledSection)`
  min-height: calc(100vh - var(--header-height));
  justify-content: start;
`;
