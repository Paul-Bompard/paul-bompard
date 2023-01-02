import styled from '@/utils/styled';
import { PageDelimiter } from '@/components/templates/PageDelimiter/PageDelimiter';
import { WIDTH_PICTURE } from './InfoProfile/InfoProfile.styles';

const HEIGHT_HEADER = '240px';
export const Container = styled('header')`
  position: relative;
  background-color: #195fab;
  color: #fff;
  height: ${HEIGHT_HEADER};
`;

export const PartContainer = styled(PageDelimiter)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export const LeftPart = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem 0;
  width: calc((100% - ${WIDTH_PICTURE}) / 2);
  flex-shrink: 0;
`;

export const Name = styled('div')`
  font-size: 2rem;
`;
export const Address = styled('div')`
  font-size: 1rem;
`;
export const Job = styled('div')`
  font-size: 2rem;
  margin-right: -2rem;
`;
