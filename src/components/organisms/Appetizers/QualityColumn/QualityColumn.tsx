import * as React from 'react';
import { Typography } from '@mui/material';

interface QualityColumnProps {
  quality: string;
}

export const QualityColumn = ({ quality }: QualityColumnProps) => {
  return <Typography>{quality}</Typography>;
};
