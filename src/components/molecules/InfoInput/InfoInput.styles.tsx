import Link from 'next/link';
import styled, { css } from '@/utils/styled';

export type InputType =
  | 'mail'
  | 'phone'
  | 'linkedin'
  | 'github'
  | 'music'
  | 'pub'
  | 'snow'
  | 'climbing'
  | 'cook'
  | 'tableTennis'
  | 'petanque';

export const Container = styled('div')<{ $rotation?: number }>`
  display: flex;
  align-items: center;
  transform-origin: left;
  height: 28px;
  width: fit-content;

  ${({ $rotation }) =>
    $rotation !== undefined &&
    css`
      transform: rotate(${$rotation}deg);
    `}
`;

export const IconContainer = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  transform-origin: bottom right;
  transition: transform 0.3s ease-in-out;
  margin-right: -4px;
  z-index: 1;
`;

export const InfoContainer = styled('div')<{
  $type: InputType;
}>`
  background-color: #fff;
  color: #195fab;
  line-height: 1;
  font-size: 0.8rem;
  padding: 0.2rem 0.5rem;
  border: 2px solid;
  border-radius: 4px;

  &:before {
    margin-left: -4px;
  }

  ${({ $type }) => {
    switch ($type) {
      default:
      case 'mail':
        return css`
          border-color: #ffdf9b;
        `;
      case 'phone':
        return css`
          border-color: #42b360;
        `;
      case 'linkedin':
        return css`
          border-color: #3bb0ff;
        `;
      case 'github':
        return css`
          border-color: #3bb0ff;
        `;
    }
  }};
`;

export const LinkCustom = styled(Link)`
  text-decoration: none;
  color: #195fab;
  width: fit-content;
`;
