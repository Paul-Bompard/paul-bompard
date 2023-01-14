import Head from 'next/head';
import * as React from 'react';
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
  const defaultUrl = 'https://spectacular-mooncake-3d4d40.netlify.app/';

  return (
    <>
      <Head>
        <title>Curriculum Vitae</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="This is my curriculum vitae." />
        <meta property="og:title" content="Paul Bompard" />
        <meta property="og:description" content="Salut Deezer, voici mon CV" />
        <meta
          property="og:image"
          content={`${defaultUrl}_next/image?url=%2Fimages%2Fscreenshots%2Fimg.png&w=384&q=75`}
        />
        <meta property="og:image:width" content="384" />
        <meta property={'og:image:height'} content={'384'} />
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
                <Skills />
                <Studies />
              </BlocContainer>
              <BlocContainer $isDual>
                <BlocContainer>
                  <Quality />
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
