'use client';

import Image from 'next/image';
import { useRef } from 'react';
import { Button } from '@/components/ui/button';

export function BooksPublications() {
  const booksRef = useRef<HTMLDivElement>(null);

  const scrollBooks = (dir: 'left' | 'right') => {
    const el = booksRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === 'left' ? -300 : 300, behavior: 'smooth' });
  };

  return (
    <section className="py-24 bg-[#f4f2fb] overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <span className="text-[#4a1800] font-[Manrope,sans-serif] tracking-widest text-xs uppercase font-bold mb-3 block">
            Member Resources
          </span>
          <h2 className="font-[Newsreader,serif] text-4xl text-[#001f6e] font-semibold">
            Our Books and Publications
          </h2>
        </div>
        <div className="flex gap-4">
          <Button
            onClick={() => scrollBooks('left')}
            variant="outline"
            size="icon"
            className="rounded-full border-[#c5c5d4] text-[#001f6e]"
          >
            <span className="material-symbols-outlined">chevron_left</span>
          </Button>
          <Button
            onClick={() => scrollBooks('right')}
            variant="outline"
            size="icon"
            className="rounded-full border-[#c5c5d4] text-[#001f6e]"
          >
            <span className="material-symbols-outlined">chevron_right</span>
          </Button>
        </div>
      </div>
      <div className="relative px-8 md:px-0">
        <div
          ref={booksRef}
          className="flex overflow-x-auto gap-8 no-scrollbar scroll-smooth px-8 md:px-[calc((100vw-80rem)/2)]"
        >
          {[
            { img: '/test-landing/stitch/book1.jpg', title: 'Birds of Mongolia: Field Guide', price: '$45.00' },
            { img: '/test-landing/stitch/book2.jpg', title: 'Rare Raptors of Central Asia', price: '$62.00' },
            { img: '/test-landing/stitch/book3.jpg', title: 'Steppe Songbirds', price: '$38.00' },
            { img: '/test-landing/stitch/book4.jpg', title: 'Ornis Mongolica Vol. 12', price: '$25.00' },
          ].map((book, i) => (
            <div key={i} className="min-w-[280px] group flex-shrink-0">
              <div className="relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 mb-4">
                <div className="relative w-full h-[380px]">
                  <Image
                    src={book.img}
                    alt={book.title}
                    fill
                    className="object-cover"
                    sizes="280px"
                  />
                </div>
                <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-[Newsreader,serif] text-lg text-[#001f6e] font-semibold leading-tight mb-1">
                {book.title}
              </h3>
              <p className="text-[#444652] font-bold text-sm">{book.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
