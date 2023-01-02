import Image from 'next/image';
import styled from '@/utils/styled';

export const SIZE_FLAG = '2rem';
export const ButtonFlag = styled('button')`
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: ${SIZE_FLAG};
  height: ${SIZE_FLAG};
  border: none;
  background-color: transparent;
  cursor: pointer;
  border-radius: 50%;
  overflow: hidden;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 0 0 0 #fff;

  &:hover {
    background-color: #fff;
    box-shadow: 0 0 0 0.1rem #fff;
  }
`;

export const Flag = styled(Image)`
  object-fit: cover;
`;
