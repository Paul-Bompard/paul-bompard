// inspiration: https://codepen.io/amit_sheen/pen/xxZeyjO
import styled, { css } from '@/utils/styled';

export const Line = styled('div')<{
  $color: string;
  $angle: number;
  $origin: string;
  $width: number;
  $isAnimated: boolean;
}>`
  height: 2px;
  width: ${({ $width }) => $width}px;
  transform: rotate(${({ $angle }) => `${$angle}deg`});
  transform-origin: ${({ $origin }) => $origin};
  ${({ $color }) =>
    $color &&
    css`
      background-image: none,
        repeating-linear-gradient(
          270deg,
          ${$color},
          ${$color} 10px,
          transparent 10px,
          transparent 20px,
          ${$color} 20px
        ),
        none, none;
    `}
  background-size: 0, calc(100% + 20px) 3px, 0, 0;
  background-position: 0, 0, 0, 0;
  background-repeat: no-repeat;
  animation: line-dashed-animation 0.9s infinite linear;
  animation-play-state: ${({ $isAnimated }) =>
    $isAnimated ? 'running' : 'paused'};
`;
