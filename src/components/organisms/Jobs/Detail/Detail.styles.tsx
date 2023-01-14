import styled, { css } from '@/utils/styled';
import { colors, devices } from '@/theme';

export const Container = styled('div')<{ $optionalText?: string }>`
  display: flex;
  flex-direction: column;
  line-height: 24px;
  width: 100%;
  flex-shrink: 0;

  ${({ $optionalText }) =>
    $optionalText != null &&
    `
    padding: 1rem 0.5rem;
    width: calc(100% + 1rem);
    margin: -1rem 0 0 -0.5rem;
    border-style: dashed;
    border-width: 1px;
    border-color: #195fab;
    position: relative;

    &::after {
      position: absolute;
      right: 5px;
      bottom: 0;
      content: '${$optionalText}';
      font-size: 1rem;
      font-weight: 300;
      font-style: italic;
      color: ${colors.primary};
      line-height: 18px;
      opacity: 0.8;
    }
  `};

  @media only screen and ${devices.tablet} {
    width: calc(50% - 1rem / 2);

    ${({ $optionalText }) =>
      $optionalText != null &&
      css`
        padding: 1rem 1.5rem 1rem 1rem;
        width: calc(50% - 1rem / 2 + 1rem);
        margin: -1rem 0 0 -1rem;
      `};
  }
`;

export const TitleContainer = styled('div')`
  display: flex;
  gap: 0.5rem;
  align-items: flex-end;
`;
