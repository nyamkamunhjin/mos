'use client';

import Link from 'next/link';
import { NavDropdown } from './NavDropdown';

export function LandingNav() {
  return (
    <nav className="fixed top-0 w-full flex justify-between items-center px-12 py-6 max-w-full z-50 transition-all duration-300 bg-black/20 backdrop-blur-sm">
      <div className="text-2xl font-[Manrope,sans-serif] font-bold tracking-tight text-white drop-shadow-md">
        Mongolian Ornithological Society
      </div>
      <div className="hidden md:flex items-center space-x-10">
        <NavDropdown
          label="Introduction"
          active
          items={['Overview', 'Message', 'Members', 'Education', 'Research', 'Events']}
        />
        <NavDropdown
          label="Birds Mongolia"
          items={['Online Guide', 'Ornis Mongolica', 'Birdlist', 'Rarity', 'Ringing Center', 'Publication', 'Reports']}
        />
        <NavDropdown
          label="Expeditions"
          items={['Gobi Desert', 'Taiga Forest', 'High Mountain', 'Taiga to Gobi']}
        />
        <Link
          href="#"
          className="text-white/90 hover:text-white text-sm font-semibold tracking-wide"
        >
          Bird Forum
        </Link>
        <Link
          href="#"
          className="text-white/90 hover:text-white text-sm font-semibold tracking-wide"
        >
          Blog News
        </Link>
      </div>
      <div className="flex items-center space-x-6">
        <button className="text-white hover:text-[#001f6e] transition-colors">
          <span className="material-symbols-outlined">search</span>
        </button>
        <button className="bg-[#1a368d] text-white px-8 py-2.5 rounded-full font-bold text-sm hover:opacity-90 active:scale-95 transition-all shadow-md">
          Donate
        </button>
      </div>
    </nav>
  );
}
