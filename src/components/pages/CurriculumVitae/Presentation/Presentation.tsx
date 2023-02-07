import { useTranslation } from 'next-i18next';
import {
  Container,
  Content,
} from '@/components/pages/CurriculumVitae/Presentation/Presentation.styles';

export const Presentation = () => {
  const { t } = useTranslation('curriculumVitae');

  const descriptions: string[] = t('description', {
    returnObjects: true,
  });

  return (
    <Container>
      {descriptions.map((description, i) => (
        <Content key={i} variant={'body1'}>
          {description}
        </Content>
      ))}
    </Container>
  );
};
