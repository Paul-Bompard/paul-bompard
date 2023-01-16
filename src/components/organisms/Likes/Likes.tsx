import { useTranslation } from 'next-i18next';
import { Typography } from '@mui/material';
import {
  InfoInput,
  InfoInputType,
} from '@/components/molecules/InfoInput/InfoInput';
import {
  Container,
  LikesContainer,
} from '@/components/organisms/Likes/Likes.styles';

export const Likes = () => {
  const { t } = useTranslation('curriculumVitae');
  const likes: InfoInputType[] = t('likes.list', { returnObjects: true });

  return (
    <Container>
      <Typography variant={'h1'}>{t('likes.title')}</Typography>
      <LikesContainer>
        {likes.map(({ type, value, link }) => (
          <InfoInput key={type} {...{ type, value, link }} />
        ))}
      </LikesContainer>
    </Container>
  );
};
