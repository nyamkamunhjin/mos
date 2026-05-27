import type {
  StrapiBird,
  StrapiCollectionResponse,
  StrapiSingleResponse,
  StrapiMedia,
  StrapiPagination,
  BirdFilters,
} from './types/bird';

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

function buildUrl(path: string, params?: Record<string, string>): string {
  const url = new URL(`${STRAPI_URL}/api${path}`);
  if (params) {
    Object.entries(params).forEach(([key, val]) => url.searchParams.append(key, val));
  }
  return url.toString();
}

async function fetchAPI<T>(path: string, params?: Record<string, string>): Promise<T> {
  const res = await fetch(buildUrl(path, params), {
    headers: {
      ...(STRAPI_TOKEN ? { Authorization: `Bearer ${STRAPI_TOKEN}` } : {}),
    },
    next: { revalidate: 3600 },
  });
  if (!res.ok) {
    throw new Error(`Strapi error ${res.status}: ${res.statusText}`);
  }
  return res.json();
}

function normalizeMedia(raw: { id: number; attributes: any } | null): StrapiMedia | null {
  if (!raw) return null;
  return {
    id: raw.id,
    url: raw.attributes.url,
    alternativeText: raw.attributes.alternativeText,
    width: raw.attributes.width,
    height: raw.attributes.height,
    formats: raw.attributes.formats,
  };
}

function normalizeBird(raw: { id: number; attributes: any }): StrapiBird {
  const a = raw.attributes;
  return {
    id: raw.id,
    commonName: a.commonName || '',
    scientificName: a.scientificName || '',
    mongolianName: a.mongolianName || '',
    slug: a.slug || '',
    family: a.family?.data ? a.family.data.attributes.name : null,
    order: a.order || '',
    conservationStatus: a.conservationStatus || 'LC',
    mongolianStatus: a.mongolianStatus || 'Unknown',
    description: a.description || '',
    identification: a.identification || '',
    habitat: a.habitat || '',
    diet: a.diet || '',
    breeding: a.breeding || '',
    migration: a.migration || '',
    size: a.size || '',
    wingspan: a.wingspan || '',
    weight: a.weight || '',
    images: (a.images?.data || []).map(normalizeMedia).filter(Boolean) as StrapiMedia[],
    audioCall: normalizeMedia(a.audioCall?.data || null),
    latitude: a.latitude ?? null,
    longitude: a.longitude ?? null,
    iucnUrl: a.iucnUrl || '',
    threats: a.threats || '',
    population: a.population || '',
    similarSpecies: [],
    createdAt: a.createdAt || '',
    updatedAt: a.updatedAt || '',
  };
}

const DEFAULT_POPULATE = [
  'images',
  'audioCall',
  'family',
].join(',');

export async function getBirds(filters?: BirdFilters): Promise<{ birds: StrapiBird[]; pagination: StrapiPagination }> {
  const params: Record<string, string> = {
    populate: DEFAULT_POPULATE,
    'pagination[page]': String(filters?.page || 1),
    'pagination[pageSize]': String(filters?.pageSize || 24),
    sort: filters?.sort || 'commonName:asc',
  };

  if (filters?.family) {
    params['filters[family][name][$eq]'] = filters.family;
  }
  if (filters?.conservationStatus) {
    params['filters[conservationStatus][$eq]'] = filters.conservationStatus;
  }
  if (filters?.search) {
    params['filters[$or][0][commonName][$containsi]'] = filters.search;
    params['filters[$or][1][scientificName][$containsi]'] = filters.search;
  }

  const res = await fetchAPI<StrapiCollectionResponse<StrapiBird>>('/birds', params);
  return {
    birds: res.data.map(normalizeBird),
    pagination: res.meta.pagination,
  };
}

export async function getBirdBySlug(slug: string): Promise<StrapiBird | null> {
  try {
    const res = await fetchAPI<StrapiCollectionResponse<StrapiBird>>('/birds', {
      populate: [
        'images',
        'audioCall',
        'family',
        'similarSpecies',
        'similarSpecies.images',
      ].join(','),
      'filters[slug][$eq]': slug,
      'pagination[pageSize]': '1',
    });
    if (!res.data.length) return null;
    return normalizeBird(res.data[0]);
  } catch {
    return null;
  }
}

export async function getAllBirdSlugs(): Promise<string[]> {
  const res = await fetchAPI<StrapiCollectionResponse<StrapiBird>>('/birds', {
    fields: 'slug',
    'pagination[pageSize]': '100',
  });
  return res.data.map((item) => item.attributes.slug).filter(Boolean);
}

export async function getFamilies(): Promise<string[]> {
  const res = await fetchAPI<{ data: { id: number; attributes: { name: string } }[] }>('/families', {
    sort: 'name:asc',
    'pagination[pageSize]': '100',
  });
  return res.data.map((item) => item.attributes.name);
}

export function getStrapiMediaUrl(media: StrapiMedia | null, format?: 'thumbnail' | 'small' | 'medium' | 'large'): string | null {
  if (!media) return null;
  const url = format && media.formats?.[format] ? media.formats[format].url : media.url;
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
}
