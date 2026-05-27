'use client';

import { use } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { getStrapiMediaUrl } from '@/lib/strapi';
import { useBird } from '@/lib/api/birds';
import { STATUS_LABELS, STATUS_COLORS } from '@/lib/status';
import ImageGallery from '@/app/components/birds/ImageGallery';
import BirdMap from '@/app/components/birds/DynamicBirdMap';

const statuses = ['LC', 'NT', 'VU', 'EN', 'CR', 'EW', 'EX'];

function SectionEyebrow({ text }: { text: string }) {
  return (
    <span className="text-mos-accent font-[Manrope,sans-serif] tracking-widest text-xs uppercase font-bold mb-4 block">
      {text}
    </span>
  );
}

function RichTextBlock({ title, content }: { title?: string; content: string }) {
  if (!content) return null;
  return (
    <section className="py-12 md:py-16">
      <div className="max-w-3xl">
        {title && (
          <>
            <SectionEyebrow text={title} />
            <h2 className="font-[Newsreader,serif] text-3xl md:text-4xl text-mos-navy font-semibold mb-6 leading-tight">
              {title}
            </h2>
          </>
        )}
        <div className="text-mos-text text-base md:text-lg leading-relaxed font-[Manrope,sans-serif] space-y-4">
          {content.split('\n').map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

function QuickFact({ label, value }: { label: string; value: string | null }) {
  if (!value) return null;
  return (
    <div>
      <p className="text-[10px] font-bold text-mos-muted font-[Manrope,sans-serif] tracking-wider uppercase mb-1">
        {label}
      </p>
      <p className="font-[Newsreader,serif] text-base text-mos-navy font-semibold">
        {value}
      </p>
    </div>
  );
}

function AudioPlayer({ url }: { url: string }) {
  return (
    <audio controls className="w-full max-w-md">
      <source src={url} />
    </audio>
  );
}

function BirdDetailSkeleton() {
  return (
    <div className="bg-mos-surface min-h-screen pt-20">
      <div className="h-[420px] md:h-[520px] bg-mos-periwinkle/20 animate-pulse" />
      <div className="max-w-7xl mx-auto px-8 py-12 space-y-8">
        <div className="h-8 w-64 bg-mos-border/20 rounded animate-pulse" />
        <div className="h-4 w-96 bg-mos-border/20 rounded animate-pulse" />
        <div className="h-4 w-full bg-mos-border/20 rounded animate-pulse" />
        <div className="h-4 w-3/4 bg-mos-border/20 rounded animate-pulse" />
      </div>
    </div>
  );
}

export default function BirdDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const { bird, isLoading, isError } = useBird(slug);

  if (isLoading) return <BirdDetailSkeleton />;
  if (isError || !bird) {
    return (
      <div className="bg-mos-surface min-h-screen pt-20 flex items-center justify-center">
        <div className="text-center py-24">
          <span className="material-symbols-outlined text-6xl text-mos-navy/10 block mb-4">raven</span>
          <h2 className="font-[Newsreader,serif] text-2xl text-mos-navy font-semibold mb-2">
            Species not found
          </h2>
          <Link
            href="/birds"
            className="inline-block mt-6 px-6 py-3 bg-mos-navy text-white rounded-full text-sm font-bold font-[Manrope,sans-serif] hover:opacity-90 transition-all"
          >
            View all species
          </Link>
        </div>
      </div>
    );
  }

  const heroImg = getStrapiMediaUrl(bird.images[0], 'large');
  const audioUrl = getStrapiMediaUrl(bird.audioCall);

  return (
    <div className="bg-mos-surface min-h-screen pt-20">
      {/* ── Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Taxon',
            name: bird.commonName,
            scientificName: bird.scientificName,
            ...(bird.mongolianName && { alternateName: bird.mongolianName }),
            description: bird.description?.replace(/<[^>]*>/g, '').slice(0, 200),
            ...(bird.family && { parentTaxon: { '@type': 'Taxon', name: bird.family.name } }),
            ...(bird.conservationStatus && {
              conservationStatus: bird.conservationStatus,
              conservationStatusReference: bird.iucnUrl || undefined,
            }),
            ...(bird.images[0] && { image: getStrapiMediaUrl(bird.images[0]) }),
          }),
        }}
      />

      {/* ── Hero ── */}
      <section className="relative h-[420px] md:h-[520px] overflow-hidden flex items-end">
        <div className="absolute inset-0 z-0 bg-mos-periwinkle/20">
          {heroImg ? (
            <Image
              src={heroImg}
              alt={bird.commonName}
              fill
              className="object-cover"
              priority
              sizes="100vw"
              quality={85}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="material-symbols-outlined text-8xl text-mos-navy/10">raven</span>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-[#001f6e]/80 via-[#001f6e]/20 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 pb-16 md:pb-24 w-full">
          <span className="text-[#ffdbcd] font-[Manrope,sans-serif] tracking-[0.25em] text-xs uppercase mb-4 block font-bold">
            Species Profile
          </span>
          <h1 className="font-[Newsreader,serif] text-4xl md:text-6xl lg:text-7xl text-white mb-2 font-semibold leading-tight max-w-4xl drop-shadow-lg">
            {bird.commonName}
          </h1>
          <p className="text-white/70 text-lg md:text-xl italic font-[Manrope,sans-serif] drop-shadow max-w-2xl">
            {bird.scientificName}
          </p>
        </div>
      </section>

      {/* ── Quick Facts Bar ── */}
      <div className="border-b border-mos-border/30 bg-white/50 backdrop-blur-sm sticky top-0 z-20">
        <div className="max-w-7xl mx-auto px-8 py-4 flex flex-wrap items-center gap-x-8 gap-y-3">
          <QuickFact label="Family" value={bird.family?.name || null} />
          <QuickFact label="Order" value={bird.order} />
          <QuickFact label="Size" value={bird.size} />
          {bird.wingspan && <QuickFact label="Wingspan" value={bird.wingspan} />}
          {bird.mongolianName && <QuickFact label="Mongolian" value={bird.mongolianName} />}
          <span
            className={`px-3 py-1 rounded-full text-[11px] font-bold font-[Manrope,sans-serif] tracking-wider ${STATUS_COLORS[bird.conservationStatus] || 'bg-gray-100 text-gray-700'}`}
          >
            {STATUS_LABELS[bird.conservationStatus] || bird.conservationStatus}
          </span>
        </div>
      </div>

      {/* ── Content ── */}
      <div className="max-w-7xl mx-auto px-8">
        <RichTextBlock title="Description" content={bird.description} />
        <div className="w-full h-px bg-mos-border/20" />
        <RichTextBlock title="Identification" content={bird.identification} />

        {bird.habitat && (
          <>
            <div className="w-full h-px bg-mos-border/20" />
            <RichTextBlock title="Habitat & Distribution" content={bird.habitat} />
          </>
        )}

        <div className="grid md:grid-cols-2 gap-x-16 gap-y-0">
          <RichTextBlock title="Diet" content={bird.diet} />
          <RichTextBlock title="Breeding" content={bird.breeding} />
        </div>

        {bird.migration && (
          <>
            <div className="w-full h-px bg-mos-border/20" />
            <RichTextBlock title="Migration" content={bird.migration} />
          </>
        )}

        {bird.threats && (
          <>
            <div className="w-full h-px bg-mos-border/20" />
            <RichTextBlock title="Threats & Conservation" content={bird.threats} />
          </>
        )}
      </div>

      {/* ── Map ── */}
      {bird.latitude && bird.longitude && (
        <section className="py-16 md:py-20 bg-mos-section">
          <div className="max-w-7xl mx-auto px-8">
            <div className="max-w-3xl mb-12">
              <SectionEyebrow text="Distribution" />
              <h2 className="font-[Newsreader,serif] text-3xl md:text-4xl text-mos-navy font-semibold leading-tight">
                Location Map
              </h2>
              <p className="text-mos-muted text-base font-[Manrope,sans-serif] mt-3 leading-relaxed">
                Approximate geographic range of {bird.commonName} in Mongolia.
              </p>
            </div>
            <BirdMap
              locations={[{ lat: bird.latitude, lng: bird.longitude, name: bird.commonName, slug: bird.slug }]}
              className="w-full h-[400px]"
            />
          </div>
        </section>
      )}

      {/* ── Image Gallery ── */}
      <ImageGallery images={bird.images} />

      {/* ── Audio ── */}
      {audioUrl && (
        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-8">
            <div className="max-w-3xl">
              <SectionEyebrow text="Audio" />
              <h2 className="font-[Newsreader,serif] text-3xl md:text-4xl text-mos-navy font-semibold mb-6 leading-tight">
                Bird Call
              </h2>
              <AudioPlayer url={audioUrl} />
            </div>
          </div>
        </section>
      )}

      {/* ── IUCN Link ── */}
      {bird.iucnUrl && (
        <section className="py-12 bg-mos-section">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <p className="text-mos-muted text-sm font-[Manrope,sans-serif] mb-3">
              International Union for Conservation of Nature
            </p>
            <a
              href={bird.iucnUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-mos-navy font-bold font-[Manrope,sans-serif] text-sm hover:opacity-70 transition-opacity"
            >
              View on IUCN Red List
              <span className="material-symbols-outlined text-base">open_in_new</span>
            </a>
          </div>
        </section>
      )}

      {/* ── Back Link ── */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <Link
            href="/birds"
            className="inline-flex items-center gap-2 text-mos-navy font-bold font-[Manrope,sans-serif] text-sm hover:opacity-70 transition-opacity"
          >
            <span className="material-symbols-outlined text-base">arrow_back</span>
            Back to all species
          </Link>
        </div>
      </section>
    </div>
  );
}
