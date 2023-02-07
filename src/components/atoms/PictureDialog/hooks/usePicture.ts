type Media = {
  src: string;
  alt: string;
  width?: number;
};

type UsePicture = (picture: string) => Media[];
export const usePicture: UsePicture = (picture) => {
  switch (picture) {
    case 'adminMeero':
      return [
        {
          src: 'meero-admin-screenshot.webp',
          alt: "Page d'admin de Meero",
        },
        {
          src: 'meero-admin-screenshot1.webp',
          alt: "Page d'admin de Meero",
        },
      ];
    case 'showcaseMeero':
      return [
        {
          src: 'meero-screenshot0.webp',
          alt: "Page d'accueil de Meero",
        },
        {
          src: 'meero-screenshot1.webp',
          alt: 'Page pour les photographes de Meero',
        },
        {
          src: 'meero-screenshot2.webp',
          alt: 'Page pour les clients de Meero',
        },
      ];
    case 'blindMeero':
      return [
        {
          src: 'blind-structure.webp',
          alt: "Structure visuelle d'une page du projet",
        },
      ];
    case 'lyaMeero':
      return [
        {
          src: 'lya-screenshot.webp',
          alt: 'Maquette du projet Lya',
        },
      ];
    case 'mvpMeeroSuite':
      return [
        {
          src: 'mvp-screenshot.webp',
          alt: 'Homepage du projet MVP',
        },
      ];
    case 'meeroSuite':
      return [
        {
          src: 'ms-screenshot.webp',
          alt: 'Nouvelle homepage du projet Meero Suite',
        },
      ];
    default:
      return [];
  }
};
