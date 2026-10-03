'use client';

import { useState } from 'react';
import Image from 'next/image';
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

export type GalleryItem = {
    src: string;
    species: string;
    meta: string;
    credit?: string;
};

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
    const [open, setOpen] = useState(false);
    const [index, setIndex] = useState(0);

    const slides = items.map((i) => ({
        src: i.src,
        title: i.species,
        description: i.meta,
    }));

    return (
        <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {items.map((item, i) => (
                    <button
                        key={i}
                        onClick={() => { setIndex(i); setOpen(true); }}
                        className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-mos-periwinkle/20 text-left"
                    >
                        <Image
                            src={item.src}
                            alt={item.species}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            quality={85}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-mos-navy/90 via-mos-navy/10 to-transparent opacity-90" />
                        <div className="absolute inset-x-0 bottom-0 p-5">
                            <p className="font-[Newsreader,serif] text-lg font-semibold text-white leading-snug">
                                {item.species}
                            </p>
                            <p className="mt-1 text-[11px] text-white/75 font-[Manrope,sans-serif] leading-relaxed">
                                {item.meta}
                            </p>
                            {item.credit && (
                                <p className="mt-0.5 text-[10px] text-white/55 font-[Manrope,sans-serif]">
                                    © {item.credit}
                                </p>
                            )}
                        </div>
                        <span className="material-symbols-outlined absolute right-4 top-4 text-white/0 transition-colors group-hover:text-white/90">
                            zoom_in
                        </span>
                    </button>
                ))}
            </div>
            <Lightbox
                open={open}
                close={() => setOpen(false)}
                index={index}
                slides={slides}
                styles={{ container: { backgroundColor: 'rgba(0, 0, 0, 0.92)' } }}
            />
        </>
    );
}
