import styled from '@/utils/styled';

export const Container = styled('div')<{ $rotate: number; $top: number }>`
  display: flex;
  align-items: center;
  transform: rotate(${({ $rotate }) => $rotate}deg);
  position: relative;
  top: ${({ $top }) => $top}px;
`;
