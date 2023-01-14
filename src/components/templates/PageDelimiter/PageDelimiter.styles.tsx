import styled from '@/utils/styled';
import { devices } from '@/theme';

export const PageContainer = styled('section')`
  max-width: 924px;
  margin: 0 auto;
  padding-left: 1rem;
  padding-right: 1rem;

  @media only screen and ${devices.tablet} {
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;
