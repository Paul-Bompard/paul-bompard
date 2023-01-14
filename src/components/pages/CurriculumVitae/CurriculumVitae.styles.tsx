import styled from '@/utils/styled';
import { PageDelimiter } from '@/components/templates/PageDelimiter/PageDelimiter';
import { devices } from '@/theme';

export const Body = styled(PageDelimiter)`
  padding-bottom: 3rem;
`;
export const BlocContainer = styled('div')<{ $isDual?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  width: 100%;

  @media only screen and ${devices.tablet} {
    width: ${({ $isDual }) =>
      $isDual === true ? 'calc((100% - 1rem) / 2)' : '100%'};
  }
`;
export const Others = styled('div')`
  display: flex;
  gap: 3rem;
  flex-direction: column;

  @media only screen and ${devices.tablet} {
    gap: 1rem;
    flex-direction: row;
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
