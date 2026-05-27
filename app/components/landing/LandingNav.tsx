'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { NavDropdown } from './NavDropdown';

const navGroups = [
  {
    label: 'Introduction',
    active: true,
    items: [
      { label: 'Overview', href: '/introduction/overview' },
      { label: 'Message', href: '/introduction/message' },
      { label: 'Members', href: '/introduction/members' },
      { label: 'Education', href: '#' },
      { label: 'Research', href: '#' },
      { label: 'Events', href: '#' },
    ],
  },
  {
    label: 'Birds Mongolia',
    items: [
      { label: 'Online Guide', href: '/birds' },
      { label: 'Ornis Mongolica', href: '#' },
      { label: 'Birdlist', href: '#' },
      { label: 'Rarity', href: '#' },
      { label: 'Ringing Center', href: '#' },
      { label: 'Publication', href: '#' },
      { label: 'Reports', href: '#' },
    ],
  },
  {
    label: 'Expeditions',
    items: [
      { label: 'Gobi Desert', href: '#' },
      { label: 'Taiga Forest', href: '#' },
      { label: 'High Mountain', href: '#' },
      { label: 'Taiga to Gobi', href: '#' },
    ],
  },
];

export function LandingNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 w-full flex justify-between items-center px-4 sm:px-8 lg:px-12 py-4 sm:py-6 z-[1000] transition-all duration-300 ${
        scrolled
          ? 'bg-black/20 backdrop-blur-sm shadow-none'
          : 'bg-white shadow-sm border-b border-mos-border/20'
      }`}>
        <Link href="/" className={`text-lg sm:text-xl lg:text-2xl font-[Manrope,sans-serif] font-bold tracking-tight leading-tight hover:opacity-90 transition-opacity ${
          scrolled ? 'text-white drop-shadow-md' : 'text-mos-navy'
        }`}>
          Mongolian<br className="sm:hidden" /> Ornithological Society
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center space-x-8 lg:space-x-10">
          {navGroups.map((g) => (
            <NavDropdown key={g.label} label={g.label} active={g.active} items={g.items} dark={!scrolled} />
          ))}
          <Link href="#" className={`text-sm font-semibold tracking-wide transition-colors ${
            scrolled ? 'text-white/90 hover:text-white' : 'text-mos-navy/80 hover:text-mos-navy'
          }`}>
            Bird Forum
          </Link>
          <Link href="#" className={`text-sm font-semibold tracking-wide transition-colors ${
            scrolled ? 'text-white/90 hover:text-white' : 'text-mos-navy/80 hover:text-mos-navy'
          }`}>
            Blog News
          </Link>
        </div>

        <div className="flex items-center gap-3 sm:gap-6">
          <Link
            href="/donate"
            className={`hidden sm:inline-block px-6 lg:px-8 py-2 rounded-full font-bold text-sm hover:opacity-90 active:scale-95 transition-all shadow-md ${
              scrolled
                ? 'bg-white/15 text-white hover:bg-white/25'
                : 'bg-[#1a368d] text-white hover:opacity-90'
            }`}
          >
            Donate
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`md:hidden p-1 transition-colors ${
              scrolled ? 'text-white' : 'text-mos-navy'
            }`}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {menuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile panel */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
          <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-[#001f6e] shadow-2xl overflow-y-auto">
            <div className="pt-24 pb-8 px-6">
              {navGroups.map((g) => (
                <div key={g.label} className="mb-6">
                  <span className="text-[#ffdbcd] text-xs font-bold tracking-widest uppercase font-[Manrope,sans-serif] block mb-3">
                    {g.label}
                  </span>
                  <div className="flex flex-col gap-2">
                    {g.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        className="text-white/80 hover:text-white text-sm font-semibold font-[Manrope,sans-serif] transition-colors py-1"
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <hr className="border-white/10 my-4" />
              <Link
                href="#"
                className="block text-white/80 hover:text-white text-sm font-semibold py-2 font-[Manrope,sans-serif]"
                onClick={() => setMenuOpen(false)}
              >
                Bird Forum
              </Link>
              <Link
                href="#"
                className="block text-white/80 hover:text-white text-sm font-semibold py-2 font-[Manrope,sans-serif]"
                onClick={() => setMenuOpen(false)}
              >
                Blog News
              </Link>
              <div className="mt-6">
                <Link
                  href="/donate"
                  className="block w-full bg-[#1a368d] text-white py-3 rounded-full font-bold text-sm text-center hover:opacity-90 active:scale-95 transition-all shadow-md"
                  onClick={() => setMenuOpen(false)}
                >
                  Donate
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
