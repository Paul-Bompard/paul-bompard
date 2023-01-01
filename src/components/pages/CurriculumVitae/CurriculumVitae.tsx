import Head from 'next/head';
import { Header } from '@/components/organisms/Header/Header';
import { Jobs } from '@/components/organisms/Jobs/Jobs';
import { Studies } from '@/components/organisms/Studies/Studies';
import { Skills } from '@/components/organisms/Skills/Skills';
import { Likes } from '@/components/organisms/Likes/Likes';
import { Presentation } from '@/components/pages/CurriculumVitae/Presentation/Presentation';
import { Quality } from '@/components/organisms/Quality/Quality';
import {
  BlocContainer,
  Body,
  Others,
  Transition,
} from './CurriculumVitae.styles';

// inspiration design:
// https://images.prismic.io/cadremploi-edito/faa8b845-4931-4cf7-b1db-1f16022b14d8_beau-cv-infographie.png?auto=compress,format

export const CurriculumVitae = () => {
  return (
    <>
      <Head>
        <title>Curriculum Vitae</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <Body>
          <BlocContainer>
            <div>
              <Transition />
              <Presentation />
            </div>
            <Jobs />
            <Others>
              <BlocContainer $isDual>
                <Studies />
                <Quality />
              </BlocContainer>
              <BlocContainer $isDual>
                <BlocContainer>
                  <Skills />
                  <Likes />
                </BlocContainer>
              </BlocContainer>
            </Others>
          </BlocContainer>
        </Body>
      </div>
    </>
  );
};
