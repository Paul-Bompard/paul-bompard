import '../../styles/globals.css';
import { AppProps } from 'next/app';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { appWithTranslation } from 'next-i18next';
import { ThemeProvider } from '@mui/material/styles';
import { ButtonSwitchLanguage } from '@/components/atoms/ButtonSwitchLanguage/ButtonSwitchLanguage';
import createEmotionCache from '../utils/createEmotionCache';
import theme from '../theme';

const clientSideEmotionCache = createEmotionCache();

function Application({
  Component,
  pageProps,
  emotionCache = clientSideEmotionCache,
}: AppProps & { emotionCache?: EmotionCache }) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <ButtonSwitchLanguage />
      </ThemeProvider>
    </CacheProvider>
  );
}

export default appWithTranslation(Application);
