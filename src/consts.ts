import type { INavigationLink } from "./models/navigation-link.model.ts";

export const SITE_DOMAIN = "https://eventedge.com";

export const SITE_TITLE = "NG BAGUETTE CONF 2025";

export const NAVIGATION_LINKS: Array<INavigationLink> = [
  { title: "Agenda", href: "/agenda" },
  { title: "Speakers", href: "/speakers" },
  { title: "Sponsors", href: "/sponsors" },
  { title: "About", href: "/about" },
  { title: "CoC", href: "/coc" },
  { title: "CFP", href: "/cfp" },
  { title: "Venue", href: "/venue" },
];

export const SOCIAL_LINKS = {
  twitter: "https://x.com/AngularDevsFr",
  bluesky: "https://bsky.app/profile/angulardevs.fr",
  linkedin: "https://www.linkedin.com/company/angular-devs-france",
};

export const CFP_LINK = "https://google.com";
