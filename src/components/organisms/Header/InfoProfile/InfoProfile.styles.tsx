import Image from 'next/image';
import styled from '@/utils/styled';
import { Info } from '@/components/organisms/Header/Info/Info';

export const Container = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const InfoContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 1.5rem 0;
  margin-left: -4rem;
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
`;

export const Picture = styled(Image)`
  object-fit: contain;
`;
