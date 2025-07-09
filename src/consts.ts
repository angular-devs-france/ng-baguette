import type { INavigationLink } from "./models/navigation-link.model.ts";

export const SITE_DOMAIN = "https://ngbaguette.angulardevs.fr";

export const SITE_TITLE = "NG BAGUETTE CONF 2026";
export const EVENT_DATE = "2026-05-22";
export const CFP_START_DATE = "2026-02-02";
export const CFP_END_DATE = "2026-03-14";
export const OPEN_PROGRAM_DATE = "2026-04-01"; // Date when the agenda will be made public
export const SPONSOR_ENDING_RESEARCH_DATE = "2026-04-20";
export const eventYear = new Date(EVENT_DATE).getFullYear();

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

export const SPONSORS : Array<{name: string; photos: string;}> = []
export const PARTENERS : Array<{name: string; photos: string;}> = []
