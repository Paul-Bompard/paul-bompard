import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { ButtonFlag, Flag, SIZE_FLAG } from './ButtonSwitchLanguage.styles';

export const ButtonSwitchLanguage = () => {
  const router = useRouter();
  const languages = router.locales;
  const { i18n } = useTranslation('curriculumVitae');

  const handleClick = () => {
    const { pathname, asPath, query } = router;
    const currentLanguage = i18n.language;
    const nextLanguage = languages?.find(
      (language) => language !== currentLanguage
    );

    void i18n.changeLanguage(nextLanguage);
    void router.push({ pathname, query }, asPath, {
      locale: nextLanguage,
    });
  };

  return (
    <ButtonFlag onClick={handleClick}>
      {i18n.language === 'en' ? (
        <Flag src="/images/flags/fr.svg" alt="fr" fill sizes={SIZE_FLAG} />
      ) : (
        <Flag src="/images/flags/uk.svg" alt="uk" fill sizes={SIZE_FLAG} />
      )}
    </ButtonFlag>
  );
};
