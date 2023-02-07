import styled from '@/utils/styled';
import { colors, fontWeight, lineHeight } from '@/theme';

export const ContainerCell = styled('div')<{
  $isHeader: boolean;
}>`
  ${({ $isHeader }) => $isHeader && `display: none;`}

  display: block;
  padding: 0.5rem 1rem;
  line-height: ${lineHeight.small};
  border-top: none;

  &:not(:last-of-type) {
    border-top: 1px solid ${colors.primary};
    display: flex;
    font-weight: ${fontWeight.medium};
  }
`;

export const ContainerTableCell = styled('td')<{
  $isHeader: boolean;
}>`
  padding: 0.5rem 1rem;
  line-height: ${lineHeight.small};

  &:not(:last-of-type) {
    border-right: 1px solid ${colors.primary};
  }

  ${({ $isHeader }) =>
    $isHeader
      ? `background-color: ${colors.primary};
         color: ${colors.white};
         font-weight: ${fontWeight.medium};`
      : `border-top: 1px solid ${colors.primary};`}
`;
