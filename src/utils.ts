import { CFP_END_DATE, CFP_START_DATE, OPEN_PROGRAM_DATE, SPONSOR_ENDING_RESEARCH_DATE } from "./consts";

export const isAfterCFPOpenning = () => {
  return Date.now() > new Date(CFP_START_DATE).getTime();
}

export const isAfterCFPClosing = () => {
  return Date.now() > new Date(CFP_END_DATE).getTime();
}

export const isAfterOpenningProgram = () => {
  return Date.now() > new Date(OPEN_PROGRAM_DATE).getTime();
}

export const isResearchingSponsors = () => {
  return Date.now() <= new Date(SPONSOR_ENDING_RESEARCH_DATE).getTime();
}

export const displayDate = (date: string, local: string = 'fr-FR') => {
  return new Date(date).toLocaleDateString(local, {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}