export interface StrapiMedia {
  id: number;
  url: string;
  alternativeText: string | null;
  width: number;
  height: number;
  formats: Record<string, { url: string; width: number; height: number }> | null;
}

export interface StrapiBird {
  id: number;
  commonName: string;
  scientificName: string;
  mongolianName: string;
  slug: string;
  family: string | null;
  order: string;
  conservationStatus: 'LC' | 'NT' | 'VU' | 'EN' | 'CR' | 'EW' | 'EX';
  mongolianStatus: 'Resident' | 'Breeding' | 'Migrant' | 'Vagrant' | 'Unknown';
  description: string;
  identification: string;
  habitat: string;
  diet: string;
  breeding: string;
  migration: string;
  size: string;
  wingspan: string;
  weight: string;
  images: StrapiMedia[];
  audioCall: StrapiMedia | null;
  latitude: number | null;
  longitude: number | null;
  iucnUrl: string;
  threats: string;
  population: string;
  similarSpecies: StrapiBird[];
  createdAt: string;
  updatedAt: string;
}

export interface StrapiPagination {
  page: number;
  pageSize: number;
  pageCount: number;
  total: number;
}

export interface StrapiCollectionResponse<T> {
  data: {
    id: number;
    attributes: T;
  }[];
  meta: {
    pagination: StrapiPagination;
  };
}

export interface StrapiSingleResponse<T> {
  data: {
    id: number;
    attributes: T;
  };
  meta: Record<string, unknown>;
}

export interface BirdFilters {
  family?: string;
  conservationStatus?: string;
  search?: string;
  page?: number;
  pageSize?: number;
  sort?: string;
}
