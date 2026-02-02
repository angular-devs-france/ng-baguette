import type { INavigationLink } from "./models/navigation-link.model.ts";

export const SITE_DOMAIN = "https://ngbaguette.angulardevs.fr";

export const SITE_TITLE = "NG BAGUETTE CONF 2026";
export const SITE_ACRONYM = "NG Baguette Conf";
export const SITE_DESCRIPTION = "French cooked Angular conference";
export const EVENT_START_TIME = "9h00";
export const EVENT_END_TIME = "18h00";
export const EVENT_DATE = "2026-05-29";
export const CFP_START_DATE = "2025-12-15";
export const CFP_END_DATE = "2026-01-31";
export const OPEN_PROGRAM_DATE = "2026-03-01"; // Date when the agenda will be made public
export const SPONSOR_ENDING_RESEARCH_DATE = "2026-04-20";
export const EVENT_YEAR = new Date(EVENT_DATE).getFullYear();
export const BLIND_TICKET_PRICE = 69; // in euros
export const OPEN_BLIND_TICKET_SALE_DATE = "2026-01-05";
export const BLIND_TICKET_SOLD_OUT: boolean = true;
export const TICKET_PRICE = 99; // in euros
export const OPEN_TICKET_SALE_DATE = null;
export const TICKET_SOLD_OUT: boolean = false;
// export const WORKSHOP_TICKET_PRICE = 500; // in euros
// export const OPEN_WORKSHOP_TICKET_SALE_DATE = "2026-02-01";
// export const WORKSHOP_TICKET_SOLD_OUT: boolean = false;

// Trigger (awaiting, open, closed)

export const TICKETING_TRIGGER_EVENT: "awaiting" | "open" | "closed" = "open";

export const SPONSORSHIP_BROCHURE_URL = {
  en: "/pdf/sponsorship-prospectus-ngbaguette-2026.pdf",
  fr: "/pdf/dossier-sponsoring-ngbaguette-2026.pdf",
};

export const ADDRESS = {
  streetAddress: "4 plae Jussieu",
  addressLocality: "Paris",
  addressRegion: "Ile de France",
  postalCode: "75005",
  addressCountry: "France",
};

export const NAVIGATION_LINKS: Record<string, INavigationLink[]> = {
  en: [
    {
      title: "Agenda",
      href: "/agenda",
      condition: () => new Date() >= new Date(OPEN_PROGRAM_DATE),
    },
    {
      title: "Program",
      href: "/program",
      condition: () => new Date() >= new Date(OPEN_PROGRAM_DATE),
    },
    {
      title: "Speakers",
      href: "/speakers",
      condition: () => new Date() >= new Date(OPEN_PROGRAM_DATE),
    },
    { title: "Sponsors", href: "/sponsors" },
    {
      title: "CFP",
      href: "/cfp",
      condition: () => new Date() <= new Date(CFP_END_DATE),
    },
    { title: "About", href: "/about" },
    { title: "CoC", href: "/coc" },
    /*
    { title: "Venue", href: "/venue" },
    */
  ],
  fr: [
    {
      title: "Agenda",
      href: "/agenda",
      condition: () => new Date() >= new Date(OPEN_PROGRAM_DATE),
    },
    {
      title: "Programme",
      href: "/program",
      condition: () => new Date() >= new Date(OPEN_PROGRAM_DATE),
    },
    {
      title: "Orateurs",
      href: "/speakers",
      condition: () => new Date() >= new Date(OPEN_PROGRAM_DATE),
    },
    { title: "Sponsors", href: "/sponsors" },
    {
      title: "CFP",
      href: "/cfp",
      condition: () => new Date() <= new Date(CFP_END_DATE),
    },
    { title: "A propos", href: "/about" },
    { title: "CoC", href: "/coc" },
    /*
    { title: "Lieu", href: "/venue" },
    */
  ],
};

export const SOCIAL_LINKS = {
  twitter: "https://x.com/AngularDevsFr",
  bluesky: "https://bsky.app/profile/angulardevs.fr",
  linkedin: "https://www.linkedin.com/company/angular-devs-france",
};

/** Past editions – add a new entry each year with the archive URL(s) per locale */
export const PAST_EDITIONS: Array<{ year: number; url: Record<string, string> }> = [
  {
    year: 2025,
    url: {
      en: "https://2025-ngbaguette.angulardevs.fr/en/",
      fr: "https://2025-ngbaguette.angulardevs.fr/fr/",
    },
  },
];

export const CFP_LINK = "https://conference-hall.io/ng-baguette-conf-2026";
export const HELLOASSO_LINK =
  "https://www.helloasso.com/associations/angular-nexus/evenements/ng-baguette-conf-2026";

export const SPONSORS: Array<{ name: string; photos: string; url: string }> = [
  // {
  //   name: "eezyr",
  //   photos: "/sponsors/eezyR.png",
  //   url: "https://eezyr.com/"
  // },
  // {
  //   name: "/sponsors/house-of-angular.png",
  //   photos: "/sponsors/house-of-angular.png",
  //   url: "https://houseofangular.io/"
  // },
];
export const PARTENERS: Array<{ name: string; photos: string; url: string }> = [
  // {
  //   name: "NantesJS",
  //   photos: "/sponsors/nantesjs.svg",
  //   url: "https://nantesjs.org/"
  // },
  // {
  //   name: 'Stickergreen',
  //   photos: "/sponsors/stickergreen.png",
  //   url: "https://stickergreen.com/"
  // },
  // {
  //   name: "Angular Love",
  //   photos: "/sponsors/angular-love.svg",
  //   url: "https://angular.love/"
  // },
  // {
  //   name: "Paris Angular",
  //   photos: "/sponsors/paris-angular.png",
  //   url: "https://www.meetup.com/paris-angular/"
  // }
];
