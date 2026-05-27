'use client';

import Link from 'next/link';

type NavItem = { label: string; href: string };

export function NavDropdown({
  label,
  items,
  active,
  dark,
}: {
  label: string;
  items: NavItem[];
  active?: boolean;
  dark?: boolean;
}) {
  return (
    <div className="group relative">
      <span
        className={`text-sm font-semibold tracking-wide pb-1 cursor-default transition-colors ${
          active
            ? `${dark ? 'text-mos-navy border-mos-navy' : 'text-white border-white'} border-b-2`
            : dark
              ? 'text-mos-navy/80 hover:text-mos-navy'
              : 'text-white/90 hover:text-white'
        }`}
      >
        {label}
      </span>
      <div className="absolute left-0 mt-2 w-48 bg-white shadow-xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {items.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="block px-4 py-2 text-sm text-[#444652] hover:bg-[#f4f2fb]"
          >
            {item.label}
          </Link>
        ))}
      </div>
    </div>
  );
}
