import { Dialog } from '@mui/material';
import Image from 'next/image';
import styled from '@/utils/styled';

export const DialogContainer = styled(Dialog)`
  &.MuiDialog-root {
    z-index: 1304;
    margin: auto;
    width: 100%;
    height: 100%;
  }

  .MuiDialog-container {
    width: 100%;
  }

  .MuiDialog-paper {
    padding: 0;
    margin: 0;
    border-radius: 0;
    width: 100%;
    height: 100%;
    max-width: calc(100% - 64px);
    background-color: transparent;
    box-shadow: none;
  }
`;

export const Container = styled('div')`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Picture = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

export const CloseButton = styled('button')`
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
  padding: 0;
  margin: 0;
  border: none;
  background-color: transparent;
  cursor: pointer;

  &:after {
    content: 'X';
    font-size: 2rem;
    color: #fff;
  }
`;
