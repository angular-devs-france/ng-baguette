import scheduleData from "../content/ng-baguette-conf-2026-schedule.json";
import { Marked, type Tokens } from "marked";

export type Speaker = {
  id: string;
  name: string;
  bio: string;
  company: string | null;
  picture: string;
  socialLinks: string[];
};

export type Session = {
  id: string;
  start: string;
  end: string;
  track: string;
  title: string;
  language: string | null;
  proposal: {
    id: string;
    proposalNumber: number;
    abstract: string;
    level: string;
    formats: string[];
    categories: string[];
    speakers: Speaker[];
  } | null;
};

export type SpeakerWithSessions = Speaker & {
  sessions: Session[];
};

export type Locale = "fr" | "en";

export function getAllSpeakers(): SpeakerWithSessions[] {
  const sessions: Session[] = scheduleData.sessions;
  const speakerMap = new Map<string, SpeakerWithSessions>();

  for (const session of sessions) {
    if (session.proposal?.speakers) {
      for (const speaker of session.proposal.speakers) {
        if (!speakerMap.has(speaker.id)) {
          speakerMap.set(speaker.id, { ...speaker, sessions: [] });
        }
        speakerMap.get(speaker.id)!.sessions.push(session);
      }
    }
  }

  return Array.from(speakerMap.values());
}

export function getSpeakerSlug(speaker: Speaker): string {
  return speaker.name
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/[^a-z0-9]+/g, "-") // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, ""); // Trim leading/trailing hyphens
}

export function getSpeakerBySlug(
  slug: string,
): SpeakerWithSessions | undefined {
  return getAllSpeakers().find((s) => getSpeakerSlug(s) === slug);
}

export function getSortedSessions(): Session[] {
  const sessions: Session[] = scheduleData.sessions;
  return [...sessions].sort(
    (a, b) => new Date(a.start).getTime() - new Date(b.start).getTime(),
  );
}

export function formatTime(isoString: string, locale: Locale): string {
  const date = new Date(isoString);
  date.setHours(date.getHours() - 2);
  const localeCode = locale === "fr" ? "fr-FR" : "en-GB";
  return date.toLocaleTimeString(localeCode, {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Europe/Paris",
  });
}

export function getLanguageLabel(lang: string | null, locale: Locale): string {
  if (locale === "fr") {
    if (lang === "fr") return "🇫🇷 Français";
    if (lang === "en") return "🇬🇧 Anglais";
  } else {
    if (lang === "fr") return "🇫🇷 French";
    if (lang === "en") return "🇬🇧 English";
  }
  return "";
}

export function getLevelLabel(level: string, locale: Locale): string {
  const labels: Record<Locale, Record<string, string>> = {
    fr: {
      BEGINNER: "Débutant",
      INTERMEDIATE: "Intermédiaire",
      ADVANCED: "Avancé",
    },
    en: {
      BEGINNER: "Beginner",
      INTERMEDIATE: "Intermediate",
      ADVANCED: "Advanced",
    },
  };
  return labels[locale][level] || level;
}

export function getSocialLinkLabel(link: string, locale: Locale): string {
  if (link.includes("github")) return "GitHub";
  if (link.includes("linkedin")) return "LinkedIn";
  if (link.includes("x.com") || link.includes("twitter")) return "X/Twitter";
  return locale === "fr" ? "Lien" : "Link";
}

export const i18n = {
  fr: {
    biography: "Biographie",
    talk: "Talk",
    talks: "Talks",
    backToSchedule: "← Retour à l'agenda",
    viewAbstract: "Voir le résumé",
  },
  en: {
    biography: "Biography",
    talk: "Talk",
    talks: "Talks",
    backToSchedule: "← Back to schedule",
    viewAbstract: "View abstract",
  },
} as const;

// Configure marked once
const markedInstance = new Marked({
  gfm: true, // GitHub Flavored Markdown
});

markedInstance.use({
  renderer: {
    link({ href, title, text }: Tokens.Link) {
      const titleAttr = title ? ` title="${title}"` : "";
      return `<a href="${href}"${titleAttr} target="_blank" rel="noopener noreferrer" class="link link-primary">${text}</a>`;
    },
  },
});

/**
 * Convert markdown string to HTML.
 * Preserves links, blockquotes, bold, italic, line breaks, etc.
 */
export function markdownToHtml(markdown: string): string {
  if (!markdown) return "";

  // Preprocess: convert single \n to markdown line break (two spaces + \n)
  // but keep \n\n as paragraph breaks
  const processed = markdown;

  return markedInstance.parse(processed) as string;
}
