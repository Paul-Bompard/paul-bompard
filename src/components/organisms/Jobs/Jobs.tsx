import { useTranslation } from 'next-i18next';
import { Typography } from '@mui/material';
import { Detail } from './Detail/Detail';
import { Job } from './Job/Job';

export const Jobs = () => {
  const { t } = useTranslation('curriculumVitae');

  const meeroDetails: Detail[] = t('jobs.meero.details', {
    returnObjects: true,
  });

  return (
    <div>
      <Typography variant={'h1'}>{t('jobs.title')}</Typography>
      <Job
        date={t('jobs.meero.date')}
        jobTitle={t('jobs.meero.jobTitle')}
        description={t('jobs.meero.description')}
        details={meeroDetails}
      />
    </div>
  );
};
