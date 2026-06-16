export type LanguageCode = 'en' | 'es';

export interface UserData {
  id: string;
  name: string;
  email: string;
}

export interface EventItem {
  event_date_id: string;
  title: string;
  date: string;
}
