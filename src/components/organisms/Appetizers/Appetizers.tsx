import * as React from 'react';
import { useTranslation } from 'next-i18next';
import { Typography } from '@mui/material';
import { useResizeDetector } from 'react-resize-detector';
import { TableEmphasis } from '@/components/templates/TableEmphasis/TableEmphasis';
import {
  AppetizerList,
  useAppetizerData,
} from '@/components/templates/TableEmphasis/hooks/useAppetizerData';
import { DescriptionColumn } from '@/components/organisms/Appetizers/DescriptionColumn/DescriptionColumn';
import { QualityColumn } from '@/components/organisms/Appetizers/QualityColumn/QualityColumn';
import { TableCell } from '@/components/organisms/Appetizers/TableCell/TableCell';
import { TRCell } from '@/components/organisms/Appetizers/Appetizers.styles';

export const Appetizers = () => {
  const { columnsConfig, data, appetizerListKey } = useAppetizerData();
  const { ref, width } = useResizeDetector();
  const { t } = useTranslation('curriculumVitae');

  const isMobile = width !== undefined && width < 600;

  return (
    <div ref={ref}>
      <Typography variant={'h1'}>{t('skills.title')}</Typography>
      <TableEmphasis columnsConfig={columnsConfig}>
        {appetizerListKey.map((keyName) => {
          const row: AppetizerList = data.listDetail[keyName];

          return (
            <TRCell key={keyName} $isMobile={isMobile}>
              {isMobile ? (
                <td colSpan={2} style={{ padding: 0 }}>
                  <TableCell isMobile={isMobile}>{row.title}</TableCell>
                  <TableCell isMobile={isMobile}>
                    <DescriptionColumn
                      description={row.description}
                      keyName={keyName}
                    />
                  </TableCell>
                </td>
              ) : width !== undefined ? (
                <>
                  <TableCell>
                    <QualityColumn quality={row.title} />
                  </TableCell>
                  <TableCell>
                    <DescriptionColumn
                      description={row.description}
                      keyName={keyName}
                    />
                  </TableCell>
                </>
              ) : null}
            </TRCell>
          );
        })}
      </TableEmphasis>
    </div>
  );
};
