import { Typography } from '@mui/material';
import { useTranslation } from 'next-i18next';
import { Container, Tag, TagContainer } from './Quality.styles';

export const Quality = () => {
  const { t } = useTranslation('curriculumVitae');
  const qualities: string[] = t('quality.list', { returnObjects: true });

  return (
    <Container>
      <Typography variant={'h1'}>{t('quality.title')}</Typography>
      <TagContainer>
        {qualities.map((quality) => (
          <Tag key={quality}>{quality}</Tag>
        ))}
      </TagContainer>
    </Container>
  );
};
