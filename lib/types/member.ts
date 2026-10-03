import type { StrapiMedia } from './bird';

export interface StrapiMember {
  id: number;
  documentId: string;
  name: string;
  title: string;
  role: string;
  bio: string;
  group: 'leadership' | 'board' | 'supporting' | 'other';
  sortOrder: number;
  image: StrapiMedia | null;
}
