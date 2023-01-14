import { useTranslation } from 'next-i18next';
import { InfoProfile } from '@/components/organisms/Header/InfoProfile/InfoProfile';
import {
  Address,
  Container,
  Job,
  LeftPart,
  Name,
  PartContainer,
} from './Header.styles';

export const Header = () => {
  const { t } = useTranslation('curriculumVitae');

  return (
    <Container>
      <PartContainer>
        <LeftPart>
          <Name>{t('header.infos.name')}</Name>
          <Address>{t('header.infos.address')}</Address>
          <Job>{t('header.infos.job')}</Job>
        </LeftPart>
        <InfoProfile />
      </PartContainer>
    </Container>
  );
};
