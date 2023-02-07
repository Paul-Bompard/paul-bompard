import * as React from 'react';
import {
  ContainerCell,
  ContainerTableCell,
} from '@/components/organisms/Appetizers/TableCell/TableCell.styles';

export const TableCell = ({
  children,
  isHeader = false,
  isMobile = false,
}: {
  children: React.ReactNode;
  isHeader?: boolean;
  isMobile?: boolean;
}) => {
  const isHederOfMobile = isHeader && isMobile;
  if (isHederOfMobile) {
    return null;
  }

  return isMobile ? (
    <ContainerCell $isHeader={isHeader}>{children}</ContainerCell>
  ) : (
    <ContainerTableCell $isHeader={isHeader}>{children}</ContainerTableCell>
  );
};
