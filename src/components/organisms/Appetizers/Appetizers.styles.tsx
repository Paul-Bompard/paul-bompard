import styled from '@/utils/styled';

export const TRCell = styled('tr')<{
  $isMobile: boolean;
}>`
  ${({ $isMobile }) =>
    $isMobile &&
    `
    &:first-of-type td > div{
      border-top: none;
    }
    `}
`;
