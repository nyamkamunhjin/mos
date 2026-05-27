import type {
  StrapiBird,
  StrapiCollectionResponse,
  StrapiMedia,
  StrapiPagination,
  StrapiFamily,
  BirdFilters,
} from './types/bird';

const STRAPI_URL = process.env.STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = process.env.STRAPI_API_TOKEN;

function buildUrl(path: string, params?: Record<string, string | string[]>): string {
  const url = new URL(`${STRAPI_URL}/api${path}`);
  if (params) {
    Object.entries(params).forEach(([key, val]) => {
      if (Array.isArray(val)) {
        val.forEach((v) => url.searchParams.append(key, v));
      } else {
        url.searchParams.append(key, val);
      }
    });
  }
  return url.toString();
}

async function fetchAPI<T>(path: string, params?: Record<string, string | string[]>): Promise<T> {
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

function normalize(bird: StrapiBird, depth = 0): StrapiBird {
  return {
    ...bird,
    commonName: bird.commonName || '',
    scientificName: bird.scientificName || '',
    mongolianName: bird.mongolianName || '',
    slug: bird.slug || '',
    order: bird.order || '',
    conservationStatus: bird.conservationStatus || 'LC',
    mongolianStatus: bird.mongolianStatus || 'Unknown',
    description: bird.description || '',
    identification: bird.identification || '',
    habitat: bird.habitat || '',
    diet: bird.diet || '',
    breeding: bird.breeding || '',
    migration: bird.migration || '',
    size: bird.size || '',
    wingspan: bird.wingspan || '',
    weight: bird.weight || '',
    images: bird.images || [],
    audioCall: bird.audioCall || null,
    latitude: bird.latitude ?? null,
    longitude: bird.longitude ?? null,
    iucnUrl: bird.iucnUrl || '',
    threats: bird.threats || '',
    population: bird.population || '',
    similarSpecies: depth < 1 ? (bird.similarSpecies || []).map((s) => normalize(s, 1)) : [],
  };
}

const DEFAULT_POPULATE = 'populate=images&populate=audioCall&populate=family';

export async function getBirds(
  filters?: BirdFilters,
): Promise<{ birds: StrapiBird[]; pagination: StrapiPagination }> {
  const params: Record<string, string | string[]> = {
    populate: ['images', 'audioCall', 'family'],
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
    birds: res.data.map((b) => normalize(b)),
    pagination: res.meta.pagination,
  };
}

export async function getBirdBySlug(slug: string): Promise<StrapiBird | null> {
  try {
    const res = await fetchAPI<StrapiCollectionResponse<StrapiBird>>('/birds', {
      populate: ['images', 'audioCall', 'family', 'similarSpecies', 'similarSpecies.images'],
      'filters[slug][$eq]': slug,
      'pagination[pageSize]': '1',
    });
    if (!res.data.length) return null;
    return normalize(res.data[0]);
  } catch {
    return null;
  }
}

export async function getAllBirdSlugs(): Promise<string[]> {
  const res = await fetchAPI<StrapiCollectionResponse<Pick<StrapiBird, 'slug'>>>('/birds', {
    fields: 'slug',
    'pagination[pageSize]': '100',
  });
  return res.data.map((item) => item.slug).filter(Boolean);
}

export async function getFamilies(): Promise<string[]> {
  const res = await fetchAPI<StrapiCollectionResponse<StrapiFamily>>('/families', {
    sort: 'name:asc',
    'pagination[pageSize]': '100',
  });
  return res.data.map((item) => item.name);
}

export function getStrapiMediaUrl(
  media: StrapiMedia | null,
  format?: 'thumbnail' | 'small' | 'medium' | 'large',
): string | null {
  if (!media) return null;
  const url =
    format && media.formats?.[format] ? media.formats[format].url : media.url;
  if (url.startsWith('http')) return url;
  return `${STRAPI_URL}${url}`;
}
