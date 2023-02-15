import { Typography } from '@mui/material';
import styled from '@/utils/styled';
import { fontSize, fontWeight } from '@/theme';

export const Container = styled('div')``;

export const TitleContainer = styled('div')`
  position: relative;
  display: flex;
  justify-content: center;
`;

export const Title = styled(Typography)`
  position: relative;
`;

export const StudiesContainer = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const ICON_SIZE = 42;
export const IconContainer = styled('div')`
  position: absolute;
  top: -${ICON_SIZE / 2 - 5}px;
  left: -${ICON_SIZE / 2}px;
  width: ${ICON_SIZE}px;
  height: ${ICON_SIZE}px;
  margin: 0;
  transform: rotate(-25deg);
`;

export const Subtitle = styled(Typography)`
  line-height: 1rem;
  margin-bottom: 0.5rem;
  font-weight: ${fontWeight.normal};
  font-size: ${fontSize.medium};
`;

export const Description = styled(Typography)`
  line-height: 1rem;
  margin: 0.5rem 0;
  font-style: italic;
`;
