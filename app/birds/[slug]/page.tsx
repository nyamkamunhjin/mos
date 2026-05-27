import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getBirdBySlug, getAllBirdSlugs, getStrapiMediaUrl } from '@/lib/strapi';
import type { Metadata } from 'next';
import type { StrapiBird } from '@/lib/types/bird';

const STATUS_LABELS: Record<string, string> = {
  LC: 'Least Concern',
  NT: 'Near Threatened',
  VU: 'Vulnerable',
  EN: 'Endangered',
  CR: 'Critically Endangered',
  EW: 'Extinct in the Wild',
  EX: 'Extinct',
};

const STATUS_COLORS: Record<string, string> = {
  LC: 'bg-green-100 text-green-800',
  NT: 'bg-yellow-100 text-yellow-800',
  VU: 'bg-orange-100 text-orange-800',
  EN: 'bg-red-100 text-red-800',
  CR: 'bg-rose-100 text-rose-800',
  EW: 'bg-gray-200 text-gray-700',
  EX: 'bg-gray-300 text-gray-600',
};

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

function ImageGallery({ images }: { images: StrapiBird['images'] }) {
  if (!images.length) return null;
  return (
    <section className="py-16 md:py-20 bg-mos-section">
      <div className="max-w-7xl mx-auto px-8">
        <div className="max-w-3xl mb-12">
          <SectionEyebrow text="Media" />
          <h2 className="font-[Newsreader,serif] text-3xl md:text-4xl text-mos-navy font-semibold leading-tight">
            Photo Gallery
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => {
            const url = getStrapiMediaUrl(img, 'medium');
            if (!url) return null;
            return (
              <div
                key={img.id}
                className="relative aspect-[4/3] rounded-xl overflow-hidden bg-mos-periwinkle/20 group"
              >
                <Image
                  src={url}
                  alt={img.alternativeText || `Photo ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={85}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  const slugs = await getAllBirdSlugs().catch(() => []);
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const bird = await getBirdBySlug(slug);
  if (!bird) return { title: 'Species Not Found' };
  return {
    title: `${bird.commonName} (${bird.scientificName}) — Birds of Mongolia`,
    description: bird.description?.slice(0, 160) || `${bird.commonName} species profile.`,
  };
}

export default async function BirdDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const bird = await getBirdBySlug(slug);
  if (!bird) notFound();

  const heroImg = getStrapiMediaUrl(bird.images[0], 'large');
  const audioUrl = getStrapiMediaUrl(bird.audioCall);

  return (
    <div className="bg-mos-surface min-h-screen pt-20">
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
        {/* Description */}
        <RichTextBlock title="Description" content={bird.description} />

        <div className="w-full h-px bg-mos-border/20" />

        {/* Identification */}
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
