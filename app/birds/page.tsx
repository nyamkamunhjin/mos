'use client';

import { Suspense, useCallback, useMemo, useState, useEffect } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { getStrapiMediaUrl } from '@/lib/strapi';
import { useBirds, useFamilies } from '@/lib/api/birds';
import { STATUS_COLORS } from '@/lib/status';
import type { BirdFilters, StrapiBird } from '@/lib/types/bird';
import BirdMap from '@/app/components/birds/DynamicBirdMap';
import { Button } from '@/components/ui/button';

export default function BirdsPage() {
  return (
    <Suspense fallback={<div className="bg-mos-surface min-h-screen pt-20" />}>
      <BirdsPageContent />
    </Suspense>
  );
}

const statuses = ['LC', 'NT', 'VU', 'EN', 'CR', 'EW', 'EX'];

function BirdCard({ bird }: { bird: StrapiBird }) {
  const imgUrl = getStrapiMediaUrl(bird.images[0], 'small');

  return (
    <Link
      href={`/birds/${bird.slug}`}
      className="group block bg-white border border-mos-border/20 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1"
    >
      <div className="aspect-[4/3] relative overflow-hidden bg-mos-periwinkle/20">
        {imgUrl ? (
          <Image
            src={imgUrl}
            alt={bird.commonName}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={85}
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="material-symbols-outlined text-5xl text-mos-navy/20">raven</span>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6">
          <h3 className="font-[Newsreader,serif] text-2xl md:text-3xl text-white font-bold leading-tight drop-shadow-lg">
            {bird.commonName}
          </h3>
          <p className="text-white/80 text-sm md:text-base italic font-[Manrope,sans-serif] mt-1.5 drop-shadow-md">
            {bird.scientificName}
          </p>
        </div>
        <span
          className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs md:text-sm font-bold font-[Manrope,sans-serif] tracking-wider shadow-md ${STATUS_COLORS[bird.conservationStatus] || 'bg-gray-100 text-gray-700'}`}
        >
          {bird.conservationStatus}
        </span>
      </div>
      <div className="p-5 md:p-6">
        <div className="flex items-center gap-3 mb-3">
          {bird.family?.name && (
            <span className="text-xs md:text-sm font-bold text-mos-accent font-[Manrope,sans-serif] tracking-wider uppercase bg-mos-accent/5 px-3 py-1 rounded-full">
              {bird.family.name}
            </span>
          )}
          {bird.mongolianName && (
            <span className="text-xs md:text-sm text-mos-muted font-[Manrope,sans-serif]">
              {bird.mongolianName}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3 text-sm md:text-base text-mos-muted font-[Manrope,sans-serif]">
          {bird.size && <span>{bird.size}</span>}
          {bird.order && <span className="text-mos-border/50">|</span>}
          {bird.order && <span>{bird.order}</span>}
        </div>
      </div>
    </Link>
  );
}

function BirdsPageContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const page = Number(searchParams.get('page')) || 1;
  const family = searchParams.get('family') || undefined;
  const conservationStatus = searchParams.get('conservationStatus') || undefined;
  const search = searchParams.get('search') || undefined;
  const view = searchParams.get('view') || 'grid';

  const [searchInput, setSearchInput] = useState(search || '');

  useEffect(() => {
    setSearchInput(search || '');
  }, [search]);

  useEffect(() => {
    if (searchInput === (search || '')) return;
    const timer = setTimeout(() => {
      const p = new URLSearchParams(searchParams.toString());
      if (searchInput) p.set('search', searchInput);
      else p.delete('search');
      p.delete('page');
      router.push(`/birds?${p.toString()}`, { scroll: false });
    }, 400);
    return () => clearTimeout(timer);
  }, [searchInput]);

  const filters = useMemo(
    () => ({ page, family, conservationStatus, search, pageSize: 24 }),
    [page, family, conservationStatus, search],
  );

  const { birds, pagination, isLoading } = useBirds(filters);
  const { families } = useFamilies();

  const setParam = useCallback(
    (key: string, value: string) => {
      const p = new URLSearchParams(searchParams.toString());
      if (value) { p.set(key, value); } else { p.delete(key); }
      if (key !== 'page') p.delete('page');
      router.push(`/birds?${p.toString()}`, { scroll: false });
    },
    [searchParams, router],
  );

  const hasFilters = family || conservationStatus || search;

  return (
    <div className="bg-mos-surface min-h-screen pt-20">
      {/* ── Hero ── */}
      <section className="relative h-[400px] md:h-[480px] overflow-hidden flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src="/test-landing/saker-falcon.jpg"
            alt="Birds of Mongolia"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001f6e]/80 via-[#001f6e]/30 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 pb-16 md:pb-24 w-full">
          <span className="text-[#ffdbcd] font-[Manrope,sans-serif] tracking-[0.25em] text-xs uppercase mb-4 block font-bold">
            Species Database
          </span>
          <h1 className="font-[Newsreader,serif] text-4xl md:text-6xl lg:text-7xl text-white mb-4 font-semibold leading-tight max-w-3xl drop-shadow-lg">
            Birds of Mongolia
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl font-[Manrope,sans-serif] drop-shadow leading-relaxed">
            Explore the complete database of Mongolian bird species — taxonomy,
            ecology, distribution, and conservation status.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* ── Filter Bar ── */}
        <div className="flex flex-wrap items-end gap-4 mb-12 p-6 bg-white border border-mos-border/30 rounded-2xl shadow-sm">
          <div className="flex-1 min-w-[200px]">
            <label className="block text-[11px] font-bold text-mos-muted font-[Manrope,sans-serif] tracking-wider uppercase mb-1.5">
              Search
            </label>
            <input
              type="text"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              placeholder="Common or scientific name..."
              className="w-full px-4 py-2.5 rounded-xl border border-mos-border/30 bg-mos-surface text-sm font-[Manrope,sans-serif] text-mos-text placeholder:text-mos-muted/50 focus:outline-none focus:ring-2 focus:ring-mos-navy/10 focus:border-mos-navy/30 transition-all"
            />
          </div>

          <div className="w-44">
            <label className="block text-[11px] font-bold text-mos-muted font-[Manrope,sans-serif] tracking-wider uppercase mb-1.5">
              Family
            </label>
            <select
              value={family || ''}
              onChange={(e) => setParam('family', e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-mos-border/30 bg-mos-surface text-sm font-[Manrope,sans-serif] text-mos-text focus:outline-none focus:ring-2 focus:ring-mos-navy/10 focus:border-mos-navy/30 transition-all appearance-none"
            >
              <option value="">All Families</option>
              {families.map((f: string) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>

          <div className="w-40">
            <label className="block text-[11px] font-bold text-mos-muted font-[Manrope,sans-serif] tracking-wider uppercase mb-1.5">
              Status
            </label>
            <select
              value={conservationStatus || ''}
              onChange={(e) => setParam('conservationStatus', e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-mos-border/30 bg-mos-surface text-sm font-[Manrope,sans-serif] text-mos-text focus:outline-none focus:ring-2 focus:ring-mos-navy/10 focus:border-mos-navy/30 transition-all appearance-none"
            >
              <option value="">All Statuses</option>
              {statuses.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {hasFilters && (
            <Button
              href="/birds"
              variant="outline"
              shape="square"
              className="border-mos-border/30 text-mos-muted hover:bg-mos-surface"
            >
              Clear
            </Button>
          )}
        </div>

        {/* ── Results ── */}
        {isLoading ? (
          <div className="flex items-center justify-center py-24">
            <span className="material-symbols-outlined text-4xl text-mos-navy/20 animate-spin">progress_activity</span>
          </div>
        ) : birds.length > 0 ? (
          <>
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-mos-muted font-[Manrope,sans-serif]">
                Showing {birds.length} of {pagination.total} species
              </p>

              <div className="flex items-center gap-1 bg-white border border-mos-border/30 rounded-xl p-1 shadow-sm">
                <Button
                  onClick={() => setParam('view', 'grid')}
                  variant="ghost"
                  size="sm"
                  className={`gap-1.5 rounded-lg text-xs font-bold ${view === 'grid' ? 'bg-mos-navy text-white shadow-sm hover:bg-mos-navy' : 'text-mos-muted hover:text-mos-navy'}`}
                >
                  <span className="material-symbols-outlined text-sm">grid_view</span>
                  Grid
                </Button>
                <Button
                  onClick={() => setParam('view', 'map')}
                  variant="ghost"
                  size="sm"
                  className={`gap-1.5 rounded-lg text-xs font-bold ${view === 'map' ? 'bg-mos-navy text-white shadow-sm hover:bg-mos-navy' : 'text-mos-muted hover:text-mos-navy'}`}
                >
                  <span className="material-symbols-outlined text-sm">map</span>
                  Map
                </Button>
              </div>
            </div>

            {view === 'map' ? (
              <div className="mb-8">
                <BirdMap
                  locations={birds
                    .filter((b) => b.latitude && b.longitude)
                    .map((b) => ({
                      lat: b.latitude!,
                      lng: b.longitude!,
                      name: b.commonName,
                      slug: b.slug,
                      imageUrl: getStrapiMediaUrl(b.images[0], 'small'),
                      description: b.description?.replace(/<[^>]*>/g, '').slice(0, 120),
                    }))}
                  className="w-full h-[550px] rounded-2xl"
                  zoom={4}
                />
                {birds.filter((b) => b.latitude && b.longitude).length < birds.length && (
                  <p className="text-xs text-mos-muted font-[Manrope,sans-serif] mt-2 text-center">
                    {birds.filter((b) => b.latitude && b.longitude).length} of{' '}
                    {birds.length} species have location data
                  </p>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {birds.map((bird) => (
                  <BirdCard key={bird.id} bird={bird} />
                ))}
              </div>
            )}

            {pagination.pageCount > 1 && (
              <div className="flex items-center justify-center gap-4 pt-12">
                {page > 1 && (
                  <button
                    onClick={() => setParam('page', String(page - 1))}
                    className="flex items-center gap-1 text-sm font-[Manrope,sans-serif] font-semibold text-mos-navy hover:opacity-70 transition-opacity"
                  >
                    <span className="material-symbols-outlined text-base">arrow_back</span>
                    Previous
                  </button>
                )}
                <span className="text-sm text-mos-muted font-[Manrope,sans-serif]">
                  Page {pagination.page} of {pagination.pageCount}
                  <span className="mx-2">&middot;</span>
                  {pagination.total} species
                </span>
                {page < pagination.pageCount && (
                  <button
                    onClick={() => setParam('page', String(page + 1))}
                    className="flex items-center gap-1 text-sm font-[Manrope,sans-serif] font-semibold text-mos-navy hover:opacity-70 transition-opacity"
                  >
                    Next
                    <span className="material-symbols-outlined text-base">arrow_forward</span>
                  </button>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-24">
            <span className="material-symbols-outlined text-6xl text-mos-navy/10 block mb-4">raven</span>
            <h2 className="font-[Newsreader,serif] text-2xl text-mos-navy font-semibold mb-2">
              No species found
            </h2>
            <p className="text-mos-muted font-[Manrope,sans-serif] text-sm max-w-md mx-auto">
              {hasFilters
                ? 'Try adjusting your filters or search terms.'
                : 'The bird database is being populated. Check back soon.'}
            </p>
            {hasFilters && (
              <Button
                href="/birds"
                variant="default"
                size="pill-sm"
                className="shadow-md"
              >
                View all species
              </Button>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
