import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { ButtonFlag, Flag, SIZE_FLAG } from './ButtonSwitchLanguage.styles';

export const ButtonSwitchLanguage = () => {
  const { i18n } = useTranslation('curriculumVitae');
  const { pathname, query } = useRouter();

  return (
    <ButtonFlag
      href={{ pathname, query: { ...query } }}
      locale={i18n.language === 'en' ? 'fr' : 'en'}
      scroll={false}
    >
      {i18n.language === 'en' ? (
        <Flag src="/images/flags/fr.svg" alt="fr" fill sizes={SIZE_FLAG} />
      ) : (
        <Flag src="/images/flags/uk.svg" alt="uk" fill sizes={SIZE_FLAG} />
      )}
    </ButtonFlag>
  );
};
