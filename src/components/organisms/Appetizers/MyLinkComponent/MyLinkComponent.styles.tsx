import styled from '@/utils/styled';
import { fontSize, lineHeight } from '@/theme';

export const Button = styled('button')`
  background-color: transparent;
  border: none;
  color: #a76427; // to people with color blindness
  cursor: pointer;
  font-size: ${fontSize.medium};
  line-height: ${lineHeight.small};
`;
