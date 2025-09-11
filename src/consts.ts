import type { INavigationLink } from "./models/navigation-link.model.ts";

export const SITE_DOMAIN = "https://ngbaguette.angulardevs.fr";

export const SITE_TITLE = "NG BAGUETTE CONF 2026";
export const EVENT_DATE = "2026-05-22";
export const CFP_START_DATE = "2026-02-02";
export const CFP_END_DATE = "2026-03-14";
export const OPEN_PROGRAM_DATE = "2026-04-01"; // Date when the agenda will be made public
export const SPONSOR_ENDING_RESEARCH_DATE = "2026-04-20";
export const EVENT_YEAR = new Date(EVENT_DATE).getFullYear();
export const BLIND_TICKET_PRICE = 25; // in euros
export const OPEN_BLIND_TICKET_SALE_DATE = "2026-02-02";
export const BLIND_TICKET_SOLD_OUT: boolean = false;
export const TICKET_PRICE = 30; // in euros
export const OPEN_TICKET_SALE_DATE = "2026-03-02";
export const TICKET_SOLD_OUT: boolean = false;


export const ADDRESS = {
  streetAddress: "3 rue Lavoisier",
  addressLocality: "Nantes",
  addressRegion: "Pays de la Loire",
  postalCode: "44300",
  addressCountry: "France",
};

export const NAVIGATION_LINKS: Record<string, INavigationLink[]> = {
  en: [
    { title: "Agenda", href: "/agenda", condition: () => new Date() >= new Date(OPEN_PROGRAM_DATE) },
    { title: "Program", href: "/program", condition: () => new Date() >= new Date(OPEN_PROGRAM_DATE) },
    { title: "Speakers", href: "/speakers", condition: () => new Date() >= new Date(OPEN_PROGRAM_DATE) },
    { title: "Sponsors", href: "/sponsors" },
    { title: "CFP", href: "/cfp", condition: () => new Date() <= new Date(CFP_END_DATE) },
    { title: "About", href: "/about" },
    { title: "CoC", href: "/coc" },
    { title: "Venue", href: "/venue" },
  ],
  fr: [
    { title: "Agenda", href: "/agenda", condition: () => new Date() >= new Date(OPEN_PROGRAM_DATE) },
    { title: "Programme", href: "/program", condition: () => new Date() >= new Date(OPEN_PROGRAM_DATE) },
    { title: "Speakers", href: "/speakers", condition: () => new Date() >= new Date(OPEN_PROGRAM_DATE) },
    { title: "Sponsors", href: "/sponsors" },
    { title: "CFP", href: "/cfp", condition: () => new Date() <= new Date(CFP_END_DATE) },
    { title: "A propos", href: "/about" },
    { title: "CoC", href: "/coc" },
    { title: "Lieu", href: "/venue" },
  ],
};

export const SOCIAL_LINKS = {
  twitter: "https://x.com/AngularDevsFr",
  bluesky: "https://bsky.app/profile/angulardevs.fr",
  linkedin: "https://www.linkedin.com/company/angular-devs-france",
};

export const CFP_LINK = "https://conference-hall.io/ng-baguette-conf-2026";
export const HELLOASSO_LINK = "https://www.helloasso.com/associations/angular-nexus/evenements/ng-baguette-conf-2026";

export const SPONSORS: Array<{ name: string; photos: string; url: string; }> = [
  {
    name: "eezyr",
    photos: "/sponsors/eezyR.png",
    url: "https://eezyr.com/"
  },
  {
    name: "/sponsors/house-of-angular.png",
    photos: "/sponsors/house-of-angular.png",
    url: "https://houseofangular.io/"
  },
  {
    name: "Lucca",
    photos: "/sponsors/lucca_light.svg",
    url: "https://lucca-carriere.vercel.app/"
  },
  {
    name: "SFEIR",
    photos: "/sponsors/sfeir_light.png",
    url: "https://sfeir.com/"
  },
  {
    name: "Takima",
    photos: "/sponsors/takima.png",
    url: "https://www.takima.fr/"
  }
]
export const PARTENERS: Array<{ name: string; photos: string; url: string }> = [
  {
    name: "NantesJS",
    photos: "/sponsors/nantesjs.svg",
    url: "https://nantesjs.org/"
  },
  {
    name: 'Stickergreen',
    photos: "/sponsors/stickergreen.png",
    url: "https://stickergreen.com/"
  },
  {
    name: "Angular Love",
    photos: "/sponsors/angular-love.svg",
    url: "https://angular.love/"
  },
  {
    name: "Paris Angular",
    photos: "/sponsors/paris-angular.png",
    url: "https://www.meetup.com/paris-angular/"
  }
]
