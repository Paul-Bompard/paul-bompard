import { Typography } from '@mui/material';
import { Trans } from 'next-i18next';
import * as React from 'react';
import { Description } from '@/components/templates/TableEmphasis/hooks/useAppetizerData';
import { MyLinkComponent } from '@/components/organisms/Appetizers/MyLinkComponent/MyLinkComponent';

interface DescriptionColumnProps {
  description: Description; // TODO: add react node
  keyName: string;
}

export const DescriptionColumn = ({
  description,
  keyName,
}: DescriptionColumnProps) => {
  return description.optionalList !== undefined ? (
    <Typography>
      <Trans
        ns="curriculumVitae"
        i18nKey={`appetizer.listDetail.${keyName}.description.title`}
      >
        <u>_</u>
        <MyLinkComponent keyTrad={keyName}>_</MyLinkComponent>
        <MyLinkComponent keyTrad={keyName}>_</MyLinkComponent>
        <MyLinkComponent keyTrad={keyName}>_</MyLinkComponent>
        <MyLinkComponent keyTrad={keyName}>_</MyLinkComponent>
        <MyLinkComponent keyTrad={keyName}>_</MyLinkComponent>
        <MyLinkComponent keyTrad={keyName}>_</MyLinkComponent>
        <MyLinkComponent keyTrad={keyName}>_</MyLinkComponent>
        <MyLinkComponent keyTrad={keyName}>_</MyLinkComponent>
      </Trans>
    </Typography>
  ) : (
    <Typography>{description.title}</Typography>
  );
};
