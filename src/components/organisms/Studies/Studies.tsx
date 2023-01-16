import { useTranslation } from 'next-i18next';
import { Typography } from '@mui/material';
import { IconGraduateCap } from '@/components/atoms/SvgIcon/IconGraduateCap';
import {
  Container,
  Description,
  IconContainer,
  StudiesContainer,
  Subtitle,
  Title,
  TitleContainer,
} from './Studies.styles';

type Study = {
  school: string;
  date: string;
  description?: string;
};
export const Studies = () => {
  const { t } = useTranslation('curriculumVitae');
  const studies: Study[] = t('studies.list', { returnObjects: true });

  return (
    <Container>
      <TitleContainer>
        <Title variant={'h1'}>
          <IconContainer>
            <IconGraduateCap />
          </IconContainer>
          {t('studies.title')}
        </Title>
      </TitleContainer>
      <StudiesContainer>
        {studies.map((study) => (
          <div key={study.date}>
            <Typography variant={'h3'}>{study.date}</Typography>
            <Subtitle variant={'h2'}>{study.school}</Subtitle>
            {study.description != null && (
              <Description>{study.description}</Description>
            )}
          </div>
        ))}
      </StudiesContainer>
    </Container>
  );
};
