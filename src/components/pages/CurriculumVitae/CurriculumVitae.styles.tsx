import styled from '@/utils/styled';
import { PageDelimiter } from '@/components/templates/PageDelimiter/PageDelimiter';
import { devices } from '@/theme';

export const Body = styled(PageDelimiter)`
  padding-bottom: 3rem;
`;
export const BlocContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
`;
export const Others = styled('div')`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;

  @media only screen and ${devices.tablet} {
    gap: 1rem;
    flex-direction: row;
    row-gap: 3rem;
  }
`;

// https://codepen.io/amit_sheen/pen/xxZeyjO
export const Transition = styled('div')`
  width: 200px;
  height: 42px;
  margin: 0 auto;
  background-image: repeating-linear-gradient(
      180deg,
      #195fab,
      #195fab 24px,
      transparent 24px,
      transparent 34px,
      #195fab 34px
    ),
    none,
    repeating-linear-gradient(
      180deg,
      #195fab,
      #195fab 24px,
      transparent 24px,
      transparent 34px,
      #195fab 34px
    ),
    none;
  background-size: 2px calc(100% + 34px), 0, 2px calc(100% + 34px), 0;
  background-position: 100% 0, 0, 100% 0, 0;
  background-repeat: no-repeat;
  animation: border-animation 0.9s infinite linear;
`;

export const BlockContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;
  margin: auto;

  @media only screen and ${devices.tablet} {
    width: calc((100% - 1rem) / 2);
  }
`;
