import { useTranslation } from 'next-i18next';
import { InfoInputType } from '@/components/molecules/InfoInput/InfoInput';
import {
  Container,
  InfoContainer,
  InfoPart,
  Picture,
  PictureContainer,
  WIDTH_PICTURE,
} from './InfoProfile.styles';

export const InfoProfile = () => {
  const { t } = useTranslation('curriculumVitae');

  const inputsTop: InfoInputType[] = t('header.infos.inputsTop', {
    returnObjects: true,
  });
  const inputsBottom: InfoInputType[] = t('header.infos.inputsBottom', {
    returnObjects: true,
  });

  return (
    <Container>
      <PictureContainer>
        <Picture
          src={'/images/profile.webp'}
          alt={'profile_picture'}
          fill
          sizes={WIDTH_PICTURE}
          priority
        />
      </PictureContainer>
      <InfoContainer>
        <InfoPart position={'top'} infos={inputsTop} />
        <InfoPart position={'bottom'} infos={inputsBottom} />
      </InfoContainer>
    </Container>
  );
};
