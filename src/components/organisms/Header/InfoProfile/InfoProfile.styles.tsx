import Image from 'next/image';
import styled from '@/utils/styled';
import { Info } from '@/components/organisms/Header/Info/Info';
import { devices } from '@/theme';

export const MIN_HEIGHT_HEADER = '240px';
export const MOBILE_HEIGHT_PROFILE = '220px';

export const Container = styled('div')`
  display: flex;
  align-items: center;
  width: 100%;
  flex-direction: column-reverse;
  justify-content: center;

  @media only screen and ${devices.mobile} {
    flex-direction: row;
    justify-content: flex-start;
    height: ${MIN_HEIGHT_HEADER};
  }

  @media only screen and ${devices.tablet} {
    max-width: unset;
    justify-content: space-between;
  }
`;

export const InfoContainer = styled('div')`
  display: flex;
  justify-content: center;
  height: 100%;
  padding: 1.5rem 0;
  gap: 1rem;
  flex-wrap: wrap;

  @media only screen and ${devices.mobile} {
    justify-content: space-between;
    flex-direction: column;
    flex-wrap: unset;
    margin-left: -3.7rem;
    gap: unset;
  }

  @media only screen and ${devices.tablet} {
    margin-left: -5.5rem;
  }
`;
export const InfoPart = styled(Info)`
  display: flex;
`;
export const WIDTH_PICTURE = '225px';
export const PictureContainer = styled('div')`
  position: relative;
  width: ${WIDTH_PICTURE};
  height: 200px;
  align-self: flex-end;
  margin: auto;
  @media only screen and ${devices.mobile} {
    margin: unset;
  }
`;

export const Picture = styled(Image)`
  object-fit: contain;
  z-index: 1;
`;
