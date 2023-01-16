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
export const TagContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.5rem;
`;
export const Tag = styled('div')`
  display: flex;
  align-items: center;
  border: 1px solid #195fab;
  border-radius: 0.3rem;
  padding: 0 1rem;
`;
