import createCache from '@emotion/cache';

const isBrowser = typeof document !== 'undefined';

// On the _document.tsx, it exists a meta tag at the top of the <head> set for this insertionPoint.
// This assures that styles are loaded first.
export default function createEmotionCache() {
  let insertionPoint;

  if (isBrowser) {
    const emotionInsertionPoint = document.querySelector<HTMLMetaElement>(
      'meta[name="emotion-insertion-point"]'
    );
    insertionPoint = emotionInsertionPoint ?? undefined;
  }

  return createCache({ key: 'css', insertionPoint });
}
