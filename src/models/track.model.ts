export type ITrack = {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  presenter: string;
  presenterSlug: string;
  language: 'fr' | 'en' | 'all';
};
