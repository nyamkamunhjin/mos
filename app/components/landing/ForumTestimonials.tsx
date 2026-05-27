'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { testimonials } from './testimonials';

export function ForumTestimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleMouseEnter = () => {
      el.style.animationPlayState = 'paused';
    };
    const handleMouseLeave = () => {
      el.style.animationPlayState = 'running';
    };
    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mouseleave', handleMouseLeave);
    return () => {
      el.removeEventListener('mouseenter', handleMouseEnter);
      el.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden border-t border-[#c5c5d4]/10">
      <div className="max-w-7xl mx-auto px-8 mb-12">
        <span className="text-[#4a1800] font-[Manrope,sans-serif] tracking-widest text-xs uppercase block text-center mb-4 font-bold">
          Community Conversation
        </span>
        <h2 className="font-[Newsreader,serif] text-4xl text-[#001f6e] text-center font-semibold">
          Voices from the Forum
        </h2>
      </div>
      <div className="relative flex overflow-x-hidden">
        <div
          ref={scrollRef}
          className="flex gap-8 py-4"
          style={{ animation: 'scroll 40s linear infinite' }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <div
              key={i}
              className="w-[350px] flex-shrink-0 bg-white border border-[#c5c5d4]/30 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 mb-6">
                <Image
                  src={t.profileImg}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-bold text-[#001f6e] text-sm">{t.name}</h4>
                  <p className="text-xs text-[#757683] font-[Manrope,sans-serif]">
                    {t.role}
                  </p>
                </div>
              </div>
              <p className="text-[#444652] italic text-sm leading-relaxed">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="mt-12 text-center">
        <Link
          href="#"
          className="text-[#001f6e] font-bold inline-flex items-center gap-2 group border-b-2 border-[#001f6e]/10 pb-1 hover:border-[#001f6e] transition-all"
        >
          Visit the Community Forum
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
            forum
          </span>
        </Link>
      </div>
    </section>
  );
}
