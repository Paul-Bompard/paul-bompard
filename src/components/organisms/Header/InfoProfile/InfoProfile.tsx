import { useTranslation } from 'next-i18next';
import { useResizeDetector } from 'react-resize-detector';
import { InfoInputType } from '@/components/molecules/InfoInput/InfoInput';
import {
  Container,
  InfoContainer,
  InfoPart,
  Picture,
  PictureContainer,
  WIDTH_PICTURE,
} from './InfoProfile.styles';

interface InfoProfileProps {
  animeLines: boolean;
}

export const InfoProfile = ({ animeLines }: InfoProfileProps) => {
  const { t } = useTranslation('curriculumVitae');
  const { ref, width } = useResizeDetector();

  const inputsTop: InfoInputType[] = t('header.infos.inputsTop', {
    returnObjects: true,
  });
  const inputsBottom: InfoInputType[] = t('header.infos.inputsBottom', {
    returnObjects: true,
  });

  return (
    <Container ref={ref}>
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
        <InfoPart
          position={'top'}
          infos={inputsTop}
          animeLine={animeLines}
          isHidingLine={width === undefined || width < 512}
        />
        <InfoPart
          position={'bottom'}
          infos={inputsBottom}
          animeLine={animeLines}
          isHidingLine={width === undefined || width < 512}
        />
      </InfoContainer>
    </Container>
  );
};
