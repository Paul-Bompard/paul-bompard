import * as React from 'react';
import { ReactNode } from 'react';
import { useResizeDetector } from 'react-resize-detector';
import { TableCell } from '@/components/organisms/Appetizers/TableCell/TableCell';
import { Table } from '@/components/templates/TableEmphasis/TableEmphasis.styles';

export type TableColumn = {
  id: string;
  label: string;
  hide?: boolean;
};

interface TableEmphasisProps {
  columnsConfig: Readonly<TableColumn[]>;
  children?: ReactNode;
}

// Table with a Quality column and a Description column
export const TableEmphasis = ({
  columnsConfig,
  children,
}: TableEmphasisProps) => {
  const { ref, width } = useResizeDetector();
  const isMobile = width !== undefined && width < 600;

  return (
    <Table ref={ref}>
      <thead>
        <tr>
          {columnsConfig.map(({ id, label }) => (
            <TableCell key={id} isHeader isMobile={isMobile}>
              {label}
            </TableCell> // hide={hide}
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </Table>
  );
};
