'use client';

import { useState, useCallback } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';
import type { StrapiBird } from '@/lib/types/bird';
import { getStrapiMediaUrl } from '@/lib/strapi';

export default function ImageGallery({ images }: { images: StrapiBird['images'] }) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const slides = images
    .map((img) => {
      const url = getStrapiMediaUrl(img, 'large');
      return url ? { src: url, alt: img.alternativeText || undefined } : null;
    })
    .filter((s): s is NonNullable<typeof s> => s !== null);

  if (!images.length || slides.length === 0) return null;

  return (
    <section className="py-16 md:py-20 bg-mos-section">
      <div className="max-w-7xl mx-auto px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-mos-accent font-[Manrope,sans-serif] tracking-widest text-xs uppercase font-bold mb-4 block">
            Media
          </span>
          <h2 className="font-[Newsreader,serif] text-3xl md:text-4xl text-mos-navy font-semibold leading-tight">
            Photo Gallery
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => {
            const url = getStrapiMediaUrl(img, 'medium');
            if (!url) return null;
            return (
              <button
                key={img.id}
                onClick={() => { setIndex(i); setOpen(true); }}
                className="relative aspect-[4/3] rounded-xl overflow-hidden bg-mos-periwinkle/20 group cursor-pointer text-left w-full"
              >
                <Image
                  src={url}
                  alt={img.alternativeText || `Photo ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={85}
                />
              </button>
            );
          })}
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        index={index}
        slides={slides}
        styles={{ container: { backgroundColor: 'rgba(0, 0, 0, 0.92)' } }}
      />
    </section>
  );
}
