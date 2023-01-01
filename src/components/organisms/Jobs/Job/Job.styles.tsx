import { Typography } from '@mui/material';
import styled from '@/utils/styled';

export const Date = styled('h3')`
  font-size: 2rem;
`;

export const JobTitle = styled(Typography)`
  text-decoration: underline;
`;

export const Description = styled(Typography)`
  display: flex;
  width: fit-content;
  line-height: 30px;
  white-space: pre-wrap;
`;

export const DetailsContainer = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
`;
