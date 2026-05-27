import Link from 'next/link';

export function LandingFooter() {
  return (
    <footer className="bg-white w-full pt-12 pb-8 px-8">
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12">
        <div className="col-span-1 md:col-span-1">
          <div className="text-xl font-[Manrope,sans-serif] font-bold text-[#001f6e] mb-6">
            Mongolian Ornithological Society
          </div>
          <p className="text-[#444652] text-sm leading-relaxed mb-6">
            Copyright &copy; 2017 Mongolian Ornithological Society. Leading the
            discovery and protection of Mongolia&apos;s birdlife. A partner in
            global bird conservation efforts.
          </p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-[#001f6e] cursor-pointer hover:opacity-70">
              public
            </span>
            <span className="material-symbols-outlined text-[#001f6e] cursor-pointer hover:opacity-70">
              public
            </span>
            <span className="material-symbols-outlined text-[#001f6e] cursor-pointer hover:opacity-70">
              mail
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-[Newsreader,serif] text-lg text-[#001f6e] font-semibold">
            Navigation
          </h5>
          <nav className="flex flex-col gap-2">
            {['Overview', 'Conservation', 'Ringing Center', 'Publications'].map(
              (item) => (
                <Link
                  key={item}
                  href="#"
                  className="text-[#444652] hover:text-[#4a1800] transition-colors text-sm"
                >
                  {item}
                </Link>
              )
            )}
          </nav>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-[Newsreader,serif] text-lg text-[#001f6e] font-semibold">
            Legal
          </h5>
          <nav className="flex flex-col gap-2">
            {['Contact Us', 'Privacy Policy', 'Terms of Use'].map((item) => (
              <Link
                key={item}
                href="#"
                className="text-[#444652] hover:text-[#4a1800] transition-colors text-sm"
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-col gap-4">
          <h5 className="font-[Newsreader,serif] text-lg text-[#001f6e] font-semibold">
            Our Location
          </h5>
        </div>
      </div>
      <div className="max-w-7xl mx-auto border-t border-[#c5c5d4]/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#444652] text-sm">
          &copy; 2024 Mongolian Ornithological Society. Dedicated to the
          conservation of avian heritage.
        </p>
        <p className="text-[#757683] text-xs uppercase tracking-widest">
          Postal address: P.O.Box 537, Ulaanbaatar 210646A
        </p>
      </div>
    </footer>
  );
}
