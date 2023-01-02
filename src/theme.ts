import { createTheme } from '@mui/material/styles';

// https://colornamer.robertcooper.me/
export const colors = {
  primary: '#195fab',
  orangeSulphur: '#eea31b',
  white: '#ffffff',
} as const;

export const breakpoints = {
  xsMobile: 320,
  mobile: 576,
  largeMobile: 600,
  tablet: 768,
  smallLaptop: 900,
  laptop: 992,
  desktop: 1200,
  largeDesktop: 1280,
  xlargeDesktop: 1536,
} as const;
export type Device = keyof typeof breakpoints;

export const devices: {
  [K in Device]: string;
} = {
  xsMobile: `(min-width: ${breakpoints.xsMobile}px)`,
  mobile: `(min-width: ${breakpoints.mobile}px)`,
  largeMobile: `(min-width: ${breakpoints.largeMobile}px)`,
  tablet: `(min-width: ${breakpoints.tablet}px)`,
  smallLaptop: `(min-width: ${breakpoints.smallLaptop}px)`,
  laptop: `(min-width: ${breakpoints.laptop}px)`,
  desktop: `(min-width: ${breakpoints.desktop}px)`,
  largeDesktop: `(min-width: ${breakpoints.largeDesktop}px)`,
  xlargeDesktop: `(min-width: ${breakpoints.xlargeDesktop}px)`,
} as const;

export const fontWeight = {
  light: 300,
  normal: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
} as const;

export const fontSize = {
  medium: '1rem',
  large: '1.5rem',
  xLarge: '2rem',
  xxLarge: '3rem',
} as const;

export const lineHeight = {
  xxSmall: '12px',
  xSmaller: '1rem',
  xSmall: '18px',
  small: '22px',
  medium: '1.5rem',
  mediumLarge: '26px',
  large: '28px',
  xLarge: '32px',
  xxLarge: '40px',
} as const;

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xsMobile: true; // adds the `xsMobile` breakpoint
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

const defaultTheme = createTheme();

const fontDefault = `"Roboto", "Helvetica", "Arial", sans-serif`;

export const fonts = {
  primary: `"Palanquin", ${fontDefault}`, // always make sure it is in sync with the font-family in globals.css
  secondary: `"Londrina", ${fontDefault}`,
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
  },
  typography: {
    fontFamily: fonts.primary,
    h1: {
      color: colors.primary,
      fontFamily: fonts.secondary,
      fontSize: fontSize.xxLarge,
      textAlign: 'center',
      marginBottom: '1rem',
    },
    h2: {
      color: colors.primary,
      fontFamily: fonts.primary,
      fontSize: fontSize.large,
      marginBottom: '1rem',
      lineHeight: lineHeight.medium,
      fontWeight: fontWeight.bold,
    },
    h3: {
      fontFamily: fonts.secondary,
      fontSize: fontSize.xLarge,
      marginBottom: '0.2rem',
      color: colors.orangeSulphur,
    },
    h4: {
      fontFamily: fonts.primary,
      fontSize: fontSize.large,
      lineHeight: lineHeight.xxLarge,
      color: colors.orangeSulphur,
      backgroundColor: colors.primary,
      paddingRight: '4rem',
      margin: '0.5rem 0',
    },
  },
  breakpoints: {
    values: {
      ...defaultTheme.breakpoints.values,
      xsMobile: 320,
      mobile: 576,
      tablet: 768,
      laptop: 992,
      desktop: 1200,
    },
  },
});

export default theme;
