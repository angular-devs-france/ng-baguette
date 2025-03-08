export type ITrack = {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  presenterSlug?: Array<string>;
  language: 'fr' | 'en' | 'all';
};
