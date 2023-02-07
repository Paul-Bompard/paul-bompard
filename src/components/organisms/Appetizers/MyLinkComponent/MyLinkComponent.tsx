import { useTranslation } from 'next-i18next';
import { MouseEventHandler } from 'react';
import { Tooltip } from '@mui/material';
import * as React from 'react';
import { OptionalList } from '@/components/templates/TableEmphasis/hooks/useAppetizerData';
import { Button } from '@/components/organisms/Appetizers/MyLinkComponent/MyLinkComponent.styles';

interface MyLinkComponentProps {
  children: string;
  keyTrad: string;
}

export const MyLinkComponent = ({
  children,
  keyTrad,
}: MyLinkComponentProps) => {
  const { t } = useTranslation('curriculumVitae');
  const handleClick: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log(e.currentTarget.textContent);
  };
  const handleMouseEnter: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log(e.currentTarget.textContent);
  };
  const handleMouseLeave: MouseEventHandler<HTMLButtonElement> = (e) => {
    console.log(e.currentTarget.textContent);
  };

  const optionalListDetail: OptionalList = t(
    `appetizer.optionalListDetail.${keyTrad}.${children}`,
    {
      returnObjects: true,
    }
  );

  return (
    <Tooltip
      title={
        <>
          {optionalListDetail.set?.map((arg) => (
            <div key={arg}>{arg}</div>
          ))}
        </>
      }
    >
      <Button
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {optionalListDetail.label}
      </Button>
    </Tooltip>
  );
};
