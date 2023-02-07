import Image from 'next/image';
import styled, { css } from '@/utils/styled';

export const ImageSurface = styled('div')<{ $isZoomed: boolean }>`
  position: ${({ $isZoomed }) => ($isZoomed ? 'unset' : 'relative')};
  width: 100%;
  height: 100%;
`;

export const ResponsiveImageWrapper = styled('div')<{
  $dropShadow?: boolean;
  $isZoomed: boolean;
}>`
  position: ${({ $isZoomed }) => ($isZoomed ? 'unset' : 'absolute')};
  transition-property: opacity;
  transition-duration: 300ms;
  ${({ $dropShadow = false }) =>
    $dropShadow &&
    css`
      filter: drop-shadow(0px 0px 84px rgba(0, 0, 0, 0.64));
    `}
  top: 0;
  left: 0;
  transition: all 0.3s ease-in-out;
  cursor: ${({ $isZoomed }) => ($isZoomed ? 'zoom-out' : 'zoom-in')};
`;

export const RoundedImage = styled(Image)``;

export const LoadingContainer = styled('div')`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
