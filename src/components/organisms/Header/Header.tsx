import { useTranslation } from 'next-i18next';
import { useState } from 'react';
import { InfoProfile } from '@/components/organisms/Header/InfoProfile/InfoProfile';
import {
  Address,
  Available,
  Container,
  Job,
  LeftPart,
  Name,
  PartContainer,
} from './Header.styles';

export const Header = () => {
  const { t } = useTranslation('curriculumVitae');
  const [isHovered, setIsHovered] = useState<boolean>(false);

  return (
    <Container
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <PartContainer>
        <LeftPart>
          <Name>{t('header.infos.name')}</Name>
          <Address>{t('header.infos.address')}</Address>
          <Job>{t('header.infos.job')}</Job>
          <Available>{t('header.infos.available')}</Available>
        </LeftPart>
        <InfoProfile animeLines={isHovered} />
      </PartContainer>
    </Container>
  );
};
