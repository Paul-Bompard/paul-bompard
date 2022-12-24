import '../../styles/globals.css';
import { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { appWithTranslation } from 'next-i18next';
import createEmotionCache from '../utils/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

function Application({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppProps & { emotionCache?: EmotionCache }) {
  return (
    <CacheProvider value={emotionCache}>
      <Component {...pageProps} />
    </CacheProvider>
  );
}

export default appWithTranslation(Application);
