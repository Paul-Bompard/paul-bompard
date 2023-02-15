import styled from '@/utils/styled';
import { PageDelimiter } from '@/components/templates/PageDelimiter/PageDelimiter';
import { devices } from '@/theme';
import {
  MIN_HEIGHT_HEADER,
  WIDTH_PICTURE,
} from './InfoProfile/InfoProfile.styles';

export const Container = styled('header')`
  position: relative;
  background-color: #195fab;
  color: #fff;
  min-height: ${MIN_HEIGHT_HEADER};
`;

export const PartContainer = styled(PageDelimiter)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  flex-direction: column;

  @media only screen and ${devices.tablet} {
    flex-direction: row;
  }
`;

export const LeftPart = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0;
  flex-shrink: 0;
  align-self: flex-start;

  @media only screen and ${devices.tablet} {
    width: calc((100% - ${WIDTH_PICTURE}) / 2);
    align-self: unset;
  }
`;

export const Name = styled('div')`
  font-size: 2rem;
`;
export const Address = styled('div')`
  font-size: 1rem;
`;
export const Job = styled('div')`
  font-size: 2rem;

  @media only screen and ${devices.tablet} {
    margin-right: -6rem;
  }
`;
export const Available = styled('div')`
  font-size: 1rem;
`;
