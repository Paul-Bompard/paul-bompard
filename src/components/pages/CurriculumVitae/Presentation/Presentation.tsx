import { Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { Container } from '@/components/pages/CurriculumVitae/Presentation/Presentation.styles';

export const Presentation = () => {
  const { t } = useTranslation('curriculumVitae');

  const descriptions: string[] = t('description', {
    returnObjects: true,
  });

  return (
    <Container>
      {descriptions.map((description, i) => (
        <Typography key={i} variant={'body1'}>
          {description}
        </Typography>
      ))}
    </Container>
  );
};
