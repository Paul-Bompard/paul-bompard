import styled from '@/utils/styled';

export const Container = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TableSkill = styled('table')`
  width: 100%;
  max-width: 480px;
  align-self: center;
`;

export const RateIcon = styled('div')`
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background-color: #ff7a43;
`;

const PADDING = 16;
const WIDTH_RATE = 16;
const GAP_RATE = 4;
const WIDTH_RATES = WIDTH_RATE * 5 + 4 * GAP_RATE + 16;

export const CellName = styled('td')`
  width: calc(100% - ${WIDTH_RATES}px);
  padding-left: ${PADDING}px;
`;

export const CellRate = styled('td')`
  display: flex;
  gap: ${GAP_RATE}px;
  width: ${WIDTH_RATES}px;
  margin-left: auto;
  padding-right: ${PADDING}px;
`;
