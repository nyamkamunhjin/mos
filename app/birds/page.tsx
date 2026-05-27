import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { getBirds, getFamilies, getStrapiMediaUrl } from '@/lib/strapi';
import type { StrapiBird } from '@/lib/types/bird';
import { STATUS_COLORS } from '@/lib/status';
import BirdMap from '@/app/components/birds/DynamicBirdMap';

function BirdCard({ bird }: { bird: StrapiBird }) {
  const imgUrl = getStrapiMediaUrl(bird.images[0], 'small');

  return (
    <Link
      href={`/birds/${bird.slug}`}
      className="group block bg-white border border-mos-border/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500"
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
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="font-[Newsreader,serif] text-lg text-white font-semibold leading-tight drop-shadow-sm">
            {bird.commonName}
          </h3>
          <p className="text-white/70 text-xs italic font-[Manrope,sans-serif] mt-0.5 drop-shadow-sm">
            {bird.scientificName}
          </p>
        </div>
        <span
          className={`absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold font-[Manrope,sans-serif] tracking-wider ${STATUS_COLORS[bird.conservationStatus] || 'bg-gray-100 text-gray-700'}`}
        >
          {bird.conservationStatus}
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 mb-2">
              {bird.family?.name && (
            <span className="text-[10px] font-bold text-mos-accent font-[Manrope,sans-serif] tracking-wider uppercase bg-mos-accent/5 px-2 py-0.5 rounded-full">
              {bird.family.name}
            </span>
          )}
          {bird.mongolianName && (
            <span className="text-[10px] text-mos-muted font-[Manrope,sans-serif]">
              {bird.mongolianName}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3 text-[11px] text-mos-muted font-[Manrope,sans-serif]">
          {bird.size && <span>{bird.size}</span>}
          {bird.order && <span className="text-mos-border">|</span>}
          {bird.order && <span>{bird.order}</span>}
        </div>
      </div>
    </Link>
  );
}

function buildFilterUrl(baseParams: Record<string, string>, overrides: Record<string, string>): string {
  const merged: Record<string, string> = {};
  for (const [k, v] of Object.entries(baseParams)) {
    if (typeof v === 'string') merged[k] = v;
  }
  Object.assign(merged, overrides);
  return `/birds?${new URLSearchParams(merged).toString()}`;
}

function Pagination({
  current,
  total,
  pageCount,
  filterParams,
}: {
  current: number;
  total: number;
  pageCount: number;
  filterParams: Record<string, string>;
}) {
  const buildHref = (page: number) => buildFilterUrl(filterParams, { page: String(page) });

  return (
    <div className="flex items-center justify-center gap-4 pt-12">
      {current > 1 && (
        <Link
          href={buildHref(current - 1)}
          className="flex items-center gap-1 text-sm font-[Manrope,sans-serif] font-semibold text-mos-navy hover:opacity-70 transition-opacity"
        >
          <span className="material-symbols-outlined text-base">arrow_back</span>
          Previous
        </Link>
      )}
      <span className="text-sm text-mos-muted font-[Manrope,sans-serif]">
        Page {current} of {pageCount}
        <span className="mx-2">&middot;</span>
        {total} species
      </span>
      {current < pageCount && (
        <Link
          href={buildHref(current + 1)}
          className="flex items-center gap-1 text-sm font-[Manrope,sans-serif] font-semibold text-mos-navy hover:opacity-70 transition-opacity"
        >
          Next
          <span className="material-symbols-outlined text-base">arrow_forward</span>
        </Link>
      )}
    </div>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Birds of Mongolia — Species Database',
    description:
      'Explore the complete database of Mongolian bird species. Search by name, family, and conservation status. Learn about taxonomy, ecology, distribution, and conservation of birds in Mongolia.',
    openGraph: {
      title: 'Birds of Mongolia — Species Database',
      description:
        'Explore the complete database of Mongolian bird species. Search by name, family, and conservation status.',
    },
  };
}

export default async function BirdsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const rawParams = await searchParams;
  const page = Number(rawParams.page) || 1;
  const family = typeof rawParams.family === 'string' ? rawParams.family : undefined;
  const conservationStatus =
    typeof rawParams.conservationStatus === 'string' ? rawParams.conservationStatus : undefined;
  const search = typeof rawParams.search === 'string' ? rawParams.search : undefined;
  const view = typeof rawParams.view === 'string' ? rawParams.view : 'grid';

  const [birdData, families] = await Promise.all([
    getBirds({ page, family, conservationStatus, search, pageSize: 24 }).catch(() => ({ birds: [] as StrapiBird[], pagination: { page: 1, pageSize: 24, pageCount: 1, total: 0 } })),
    getFamilies().catch(() => []),
  ]);

  // Build filter param map for pagination/view-toggle links
  const filterParams: Record<string, string> = {};
  if (family) filterParams.family = family;
  if (conservationStatus) filterParams.conservationStatus = conservationStatus;
  if (search) filterParams.search = search;
  if (view !== 'grid') filterParams.view = view;

  const statuses = ['LC', 'NT', 'VU', 'EN', 'CR', 'EW', 'EX'];

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
        <form
          method="GET"
          action="/birds"
          className="flex flex-wrap items-end gap-4 mb-12 p-6 bg-white border border-mos-border/30 rounded-2xl shadow-sm"
        >
          <div className="flex-1 min-w-[200px]">
            <label className="block text-[11px] font-bold text-mos-muted font-[Manrope,sans-serif] tracking-wider uppercase mb-1.5">
              Search
            </label>
            <input
              type="text"
              name="search"
              defaultValue={search || ''}
              placeholder="Common or scientific name..."
              className="w-full px-4 py-2.5 rounded-xl border border-mos-border/30 bg-mos-surface text-sm font-[Manrope,sans-serif] text-mos-text placeholder:text-mos-muted/50 focus:outline-none focus:ring-2 focus:ring-mos-navy/10 focus:border-mos-navy/30 transition-all"
            />
          </div>

          <div className="w-44">
            <label className="block text-[11px] font-bold text-mos-muted font-[Manrope,sans-serif] tracking-wider uppercase mb-1.5">
              Family
            </label>
            <select
              name="family"
              defaultValue={family || ''}
              className="w-full px-4 py-2.5 rounded-xl border border-mos-border/30 bg-mos-surface text-sm font-[Manrope,sans-serif] text-mos-text focus:outline-none focus:ring-2 focus:ring-mos-navy/10 focus:border-mos-navy/30 transition-all appearance-none"
            >
              <option value="">All Families</option>
              {families.map((f) => (
                <option key={f} value={f}>{f}</option>
              ))}
            </select>
          </div>

          <div className="w-40">
            <label className="block text-[11px] font-bold text-mos-muted font-[Manrope,sans-serif] tracking-wider uppercase mb-1.5">
              Status
            </label>
            <select
              name="conservationStatus"
              defaultValue={conservationStatus || ''}
              className="w-full px-4 py-2.5 rounded-xl border border-mos-border/30 bg-mos-surface text-sm font-[Manrope,sans-serif] text-mos-text focus:outline-none focus:ring-2 focus:ring-mos-navy/10 focus:border-mos-navy/30 transition-all appearance-none"
            >
              <option value="">All Statuses</option>
              {statuses.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div className="flex gap-2 pb-0.5">
            <button
              type="submit"
              className="px-6 py-2.5 bg-mos-navy text-white rounded-xl text-sm font-bold font-[Manrope,sans-serif] hover:opacity-90 active:scale-95 transition-all"
            >
              Filter
            </button>
            <Link
              href="/birds"
              className="px-4 py-2.5 border border-mos-border/30 text-mos-muted rounded-xl text-sm font-[Manrope,sans-serif] hover:bg-mos-surface transition-all"
            >
              Clear
            </Link>
          </div>
        </form>

        {/* ── Results ── */}
        {birdData.birds.length > 0 ? (
          <>
            <div className="flex items-center justify-between mb-6">
              <p className="text-sm text-mos-muted font-[Manrope,sans-serif]">
                Showing {birdData.birds.length} of {birdData.pagination.total} species
              </p>

              {/* View toggle */}
              <div className="flex items-center gap-1 bg-white border border-mos-border/30 rounded-xl p-1 shadow-sm">
                <Link
                  href={buildFilterUrl(filterParams, { view: 'grid' })}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold font-[Manrope,sans-serif] transition-all ${
                    view === 'grid'
                      ? 'bg-mos-navy text-white shadow-sm'
                      : 'text-mos-muted hover:text-mos-navy'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">grid_view</span>
                  Grid
                </Link>
                <Link
                  href={buildFilterUrl(filterParams, { view: 'map' })}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold font-[Manrope,sans-serif] transition-all ${
                    view === 'map'
                      ? 'bg-mos-navy text-white shadow-sm'
                      : 'text-mos-muted hover:text-mos-navy'
                  }`}
                >
                  <span className="material-symbols-outlined text-sm">map</span>
                  Map
                </Link>
              </div>
            </div>

            {view === 'map' ? (
              <div className="mb-8">
                <BirdMap
                  locations={birdData.birds
                    .filter((b) => b.latitude && b.longitude)
                    .map((b) => ({ lat: b.latitude!, lng: b.longitude!, name: b.commonName, slug: b.slug }))}
                  className="w-full h-[550px] rounded-2xl"
                  zoom={4}
                />
                {birdData.birds.filter((b) => b.latitude && b.longitude).length < birdData.birds.length && (
                  <p className="text-xs text-mos-muted font-[Manrope,sans-serif] mt-2 text-center">
                    {birdData.birds.filter((b) => b.latitude && b.longitude).length} of{' '}
                    {birdData.birds.length} species have location data
                  </p>
                )}
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {birdData.birds.map((bird) => (
                  <BirdCard key={bird.id} bird={bird} />
                ))}
              </div>
            )}

            {birdData.pagination.pageCount > 1 && (
              <Pagination
                current={birdData.pagination.page}
                total={birdData.pagination.total}
                pageCount={birdData.pagination.pageCount}
                filterParams={filterParams}
              />
            )}
          </>
        ) : (
          <div className="text-center py-24">
            <span className="material-symbols-outlined text-6xl text-mos-navy/10 block mb-4">raven</span>
            <h2 className="font-[Newsreader,serif] text-2xl text-mos-navy font-semibold mb-2">
              No species found
            </h2>
            <p className="text-mos-muted font-[Manrope,sans-serif] text-sm max-w-md mx-auto">
              {search || family || conservationStatus
                ? 'Try adjusting your filters or search terms.'
                : 'The bird database is being populated. Check back soon.'}
            </p>
            {(search || family || conservationStatus) && (
              <Link
                href="/birds"
                className="inline-block mt-6 px-6 py-3 bg-mos-navy text-white rounded-full text-sm font-bold font-[Manrope,sans-serif] hover:opacity-90 transition-all"
              >
                View all species
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
