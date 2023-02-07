const generateCSP = () => {
  const policy = {};

  // adder function for our policy object
  const add = (directive, value, options = {}) => {
    if (options.devOnly === true && process.env.NODE_ENV !== 'development') {
      return;
    }

    const curr = policy[directive];
    policy[directive] = curr ? [...curr, value] : [value];
  };

  /*
   * default-src
   *
   * I use 'none' here to ensure that we don't accidentally inherit any
   * default policies from the browser. This is a good practice to follow
   * as it ensures that we are only allowing what we want to allow.
   * With this mindset, if a directive isn't explicitly declared, it's blocked.
   * It makes the site much more secure, and debugging a lot easier.
   */
  add('default-src', `'none'`);

  /*
   * script-src
   *
   * I use 'self' here to allow scripts to be loaded from the same origin.
   * I use 'unsafe-eval' only in development mode to allow unsafe eval (https://developer.mozilla.org/en-US/docs/Ib/HTTP/Headers/Content-Security-Policy/script-src#Unsafe_eval_expressions).
   */
  add('script-src', `'self'`);
  add('script-src', `'sha256-FDyPg8CqqIpPAfGVKx1YeKduyLs0ghNYWII21wL+7HM='`);
  add('script-src', `'unsafe-eval'`, { devOnly: true });

  /*
   * style-src
   *
   * I use 'self' here to allow styles to be loaded from the same origin.
   * I use 'unsafe-inline' here to allow inline styles. This is required
   * for Google Analytics to work.
   */
  add('style-src', `'self'`);
  add('style-src', `'unsafe-inline'`);

  /*
   * font-src
   *
   * I use 'self' here to allow fonts to be loaded from the same origin.
   */
  add('font-src', `'self'`);

  /*
   * connect-src
   *
   * I use 'self' here to allow connections to the same origin. (use for translations)
   */
  add('connect-src', `'self'`);
  add('connect-src', `*.local`, { devOnly: true });
  add('connect-src', `*.localhost`, { devOnly: true });

  /*
   * frame-ancestors
   *
   * I use 'none' here to prevent the site from being embedded in an iframe.
   */
  add('frame-ancestors', `'none'`);

  /*
   * base-uri
   *
   * I restrict the base-uri to the same origin to prevent XSS attacks.
   */
  add('base-uri', `'self'`);

  /*
   * form-action
   *
   * I use 'self' here to allow forms to be submitted to the same origin.
   */
  add('form-action', `'self'`);

  /*
   * prefetch-src
   *
   * This is a new directive that allows us to control what resources can be prefetched.
   * This is still a draft, but it's a good idea to start using it now.
   * I use 'self' here to allow prefetching from the same origin.
   */
  add('prefetch-src', `'self'`);

  /*
   * img-src
   *
   * I use 'self' here to allow images to be loaded from the same origin.
   * I use data: here to allow inline images.
   */
  add('img-src', `'self' data:`);

  // return the object in a formatted value (this won't work on IE11 without a polyfill!)
  return Object.entries(policy)
    .map(([key, value]) => `${key} ${value.join(' ')}`)
    .join('; ');
};

const CSPHeader = {
  key: 'Content-Security-Policy',
  value: generateCSP(),
};

/*
 * X-Frame-Options
 *
 * I use deny here to prevent the site from being loaded in an iframe.
 */
const xFrameOption = {
  key: 'X-Frame-Options',
  value: 'deny',
};

/*
 * X-Content-Type-Options
 *
 * I use nosniff here to prevent the browser from trying to guess the type of content.
 */
const xContentTypeOption = {
  key: 'X-Content-Type-Options',
  value: 'nosniff',
};

module.exports = {
  headers: () => [
    {
      source: '/health-check',
      headers: [
        {
          key: 'X-Application-Version',
          value: process.env.APPLICATION_VERSION || 'undefined-webapp',
        },
        { ...CSPHeader },
        { ...xFrameOption },
        { ...xContentTypeOption },
      ],
    },
    {
      source: '/:path',
      headers: [
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=31536000; includeSubDomains; preload',
        },
        { ...CSPHeader },
        { ...xFrameOption },
        { ...xContentTypeOption },
      ],
    },
    {
      source: '/',
      headers: [
        {
          key: 'Strict-Transport-Security',
          value: 'max-age=31536000; includeSubDomains; preload',
        },
        { ...CSPHeader },
        { ...xFrameOption },
        { ...xContentTypeOption },
      ],
    },
  ],
};
