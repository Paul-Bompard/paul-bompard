import { Dialog } from '@mui/material';
import styled from '@/utils/styled';

export const PADDING_DIALOG = 64;
export const DialogContainer = styled(Dialog)`
  &.MuiDialog-root {
    z-index: 1304;
    margin: auto;
    overflow: auto;
  }

  .MuiDialog-container {
    width: 100%;
    align-items: flex-end;
  }

  .MuiDialog-paper {
    padding: 0;
    margin: 0;
    border-radius: 0;
    width: 100%;
    height: 100%;
    max-width: calc(100% - ${PADDING_DIALOG}px);
    background-color: transparent;
    box-shadow: none;
    position: unset;

    // To hide the scroll bar
    -ms-overflow-style: none;
    scrollbar-width: none;

    &::-webkit-scrollbar {
      display: none;
      width: 0 !important;
    }
  }
`;

export const Container = styled('div')`
  position: relative;
  display: flex;
  flex-grow: 1;
`;

export const CloseButton = styled('button')`
  position: fixed;
  top: 2.5rem;
  right: 2.5rem;
  line-height: 1;
  z-index: 2;
  background-color: #00000080;
  border-radius: 50%;
  width: 3rem;
  height: 3rem;
  padding: 0;
  margin: 0;
  border: none;
  cursor: pointer;

  &:after {
    content: 'X';
    font-size: 2rem;
    line-height: 0.7;
    color: #fff;
  }
`;
