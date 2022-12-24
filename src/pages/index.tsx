import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { CurriculumVitae } from '@/components/pages/CurriculumVitae/CurriculumVitae';

export default CurriculumVitae;

export const getStaticProps = async ({ locale }: { locale: string }) => ({
  props: {
    ...(await serverSideTranslations(locale, ['curriculumVitae'])),
  },
});
