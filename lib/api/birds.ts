'use client';

import useSWR from 'swr';
import type { StrapiBird, StrapiPagination, BirdFilters } from '@/lib/types/bird';

const fetcher = (url: string) => fetch(url).then((r) => r.json());

function buildBirdsUrl(filters?: BirdFilters): string {
  const params = new URLSearchParams();
  if (filters?.page) params.set('page', String(filters.page));
  if (filters?.pageSize) params.set('pageSize', String(filters.pageSize));
  if (filters?.family) params.set('family', filters.family);
  if (filters?.conservationStatus) params.set('conservationStatus', filters.conservationStatus);
  if (filters?.search) params.set('search', filters.search);
  if (filters?.sort) params.set('sort', filters.sort);
  const qs = params.toString();
  return `/api/birds${qs ? `?${qs}` : ''}`;
}

export function useBirds(filters?: BirdFilters) {
  const { data, error, isLoading, mutate } = useSWR<{
    birds: StrapiBird[];
    pagination: StrapiPagination;
  }>(buildBirdsUrl(filters), fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 60_000,
  });

  return {
    birds: data?.birds ?? [],
    pagination: data?.pagination ?? { page: 1, pageSize: 24, pageCount: 1, total: 0 },
    isLoading,
    isError: !!error,
    mutate,
  };
}

export function useBird(slug: string) {
  const { data, error, isLoading } = useSWR<StrapiBird>(
    slug ? `/api/birds/${slug}` : null,
    fetcher,
    { revalidateOnFocus: false, dedupingInterval: 60_000 },
  );

  return {
    bird: data ?? null,
    isLoading,
    isError: !!error,
  };
}

export function useFamilies() {
  const { data, error, isLoading } = useSWR<string[]>('/api/families', fetcher, {
    revalidateOnFocus: false,
    dedupingInterval: 300_000,
  });

  return {
    families: data ?? [],
    isLoading,
    isError: !!error,
  };
}
