'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { NavDropdown } from './NavDropdown';
import { Button } from '@/components/ui/button';

type NavItem = { label: string; href: string };
type NavGroup = { label: string; href?: string; items?: NavItem[]; active?: boolean };

const navGroups: NavGroup[] = [
  {
    label: 'About Us',
    active: true,
    items: [
      { label: 'Overview', href: '/introduction/overview' },
      { label: "President's Message", href: '/introduction/message' },
      { label: 'Members', href: '/introduction/members' },
      { label: 'Partners', href: '/about/partners' },
    ],
  },
  {
    label: 'Science & Conservation',
    items: [
      { label: 'Research Projects', href: '/science/research' },
      { label: 'Conservation Projects', href: '/science/conservation' },
      { label: 'Project Map', href: '/science/map' },
      { label: 'Education', href: '/education' },
      { label: 'Events', href: '/events' },
    ],
  },
    {
      label: 'Birds Mongolia',
      items: [
        { label: 'Online Guide', href: '/birds' },
        { label: 'Search Tool', href: '/search-tool' },
        { label: 'Publications', href: '/publications' },
        { label: 'Rarity Committee', href: '/rarity' },
        { label: 'Ringing Center', href: '/ringing' },
        { label: 'Birds Mongolia App', href: '/app' },
      ],
    },
  {
    label: 'Tours & Expeditions',
    href: '/tours',
  },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Support Us', href: '/support' },
  { label: 'Become a Member', href: '/membership' },
  { label: 'News', href: '/news' },
];

function isGroup(g: NavGroup): g is NavGroup & { items: NavItem[] } {
  return Array.isArray(g.items) && g.items.length > 0;
}

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
        <div className="hidden lg:flex items-center space-x-4 xl:space-x-6">
          {navGroups.map((g) =>
            isGroup(g) ? (
              <NavDropdown key={g.label} label={g.label} active={g.active} items={g.items} dark={!scrolled} />
            ) : (
              <Link
                key={g.label}
                href={g.href ?? '#'}
                className={`text-xs xl:text-sm font-semibold tracking-wide transition-colors whitespace-nowrap ${
                  scrolled ? 'text-white/90 hover:text-white' : 'text-mos-navy/80 hover:text-mos-navy'
                }`}
              >
                {g.label}
              </Link>
            ),
          )}
        </div>

        <div className="flex items-center gap-3 sm:gap-6">
          <Button
            href="/donate"
            variant="default"
            size="pill-sm"
            className={`${scrolled ? 'bg-white/15 text-white hover:bg-white/25' : 'bg-[#1a368d] text-white'} border-0 shadow-md`}
          >
            Donate
          </Button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className={`lg:hidden p-1 transition-colors cursor-pointer ${
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
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setMenuOpen(false)} />
          <div className="absolute top-0 right-0 h-full w-80 max-w-[85vw] bg-[#001f6e] shadow-2xl overflow-y-auto">
            <div className="pt-24 pb-8 px-6">
              {navGroups.map((g) => (
                <div key={g.label} className="mb-6">
                  {isGroup(g) ? (
                    <>
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
                    </>
                  ) : (
                    <Link
                      href={g.href ?? '#'}
                      className="text-[#ffdbcd] hover:text-white text-xs font-bold tracking-widest uppercase font-[Manrope,sans-serif] block py-1 transition-colors"
                      onClick={() => setMenuOpen(false)}
                    >
                      {g.label}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-6">
                <Button href="/donate" variant="default" size="pill" className="w-full bg-[#1a368d] border-0 shadow-md" onClick={() => setMenuOpen(false)}>
                  Donate
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
