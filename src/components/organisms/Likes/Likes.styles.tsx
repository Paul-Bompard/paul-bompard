import styled from '@/utils/styled';
import { devices } from '@/theme';

export const Container = styled('div')`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;

  @media only screen and ${devices.tablet} {
    width: calc((100% - 1rem) / 2);
  }
`;

export const LikesContainer = styled('div')`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
`;
