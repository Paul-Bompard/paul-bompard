import styled from '@/utils/styled';

export const Eye = styled('button')`
  display: flex;
  border: none;
  background-color: transparent;
  cursor: pointer;
  padding: 0;
  color: #195fab;
  font-size: 1.3rem;
  opacity: 0.5;
  outline: none;
  transition: opacity 0.2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;
