import Image from 'next/image';
import Link from 'next/link';

export function SpeciesSection() {
  return (
    <section className="bg-[#f4f2fb] py-24 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-[#4a1800] font-[Manrope,sans-serif] tracking-widest text-xs uppercase">
              Field Guide Highlights
            </span>
            <h2 className="font-[Newsreader,serif] text-4xl text-[#001f6e] mt-2 font-semibold">
              Recent News
            </h2>
          </div>
          <Link
            href="/birds"
            className="text-[#001f6e] font-medium border-b border-[#001f6e]/20 pb-1 cursor-pointer"
          >
            View Full Directory
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[700px]">
          <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl min-h-[240px] md:min-h-0">
            <Image
              src="/test-landing/saker-falcon.jpg"
              alt="Saker Falcon"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
              <span className="text-[#f58e5f] bg-[#ffdbcd] w-fit px-3 py-1 rounded-md text-xs font-bold mb-3">
                Vulnerable
              </span>
              <h3 className="font-[Newsreader,serif] text-3xl text-white mb-2 font-medium">
                World Migratory Bird Day 2015
              </h3>
              <p className="text-white/80 text-sm max-w-sm">
                Migratory birds are passengers without a visa across many
                countries. Therefore research and conservation activities for
                migratory birds should run by cooperative initiatives between
                countries.
              </p>
            </div>
          </div>
          <div className="md:col-span-2 relative group overflow-hidden rounded-xl min-h-[200px] md:min-h-0">
            <Image
              src="/test-landing/sandgrouse.jpg"
              alt="Pallas's Sandgrouse"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
              <h3 className="font-[Newsreader,serif] text-2xl text-white font-medium">
                World Migratory Bird Day 2015
              </h3>
              <p className="text-white/70 text-xs">
                Join us in celebrating the incredible journeys of migratory
                birds and learning how we can protect their vital flyways.
              </p>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl min-h-[200px] md:min-h-0">
            <Image
              src="/test-landing/golden-eagle.jpg"
              alt="Golden Eagle"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
              <h3 className="font-[Newsreader,serif] text-xl text-white font-medium">
                Golden Eagle
              </h3>
            </div>
          </div>
          <div className="relative group overflow-hidden rounded-xl bg-[#1a368d] flex flex-col justify-center items-center p-6 text-center text-white min-h-[200px] md:min-h-0">
            <div className="text-4xl font-[Newsreader,serif] font-bold mb-4">
              470+
            </div>
            <p className="text-sm font-[Manrope,sans-serif] opacity-80 mb-6">
              Confirmed species documented across the region
            </p>
            <Link
              href="/birds"
              className="inline-block text-xs font-bold tracking-widest uppercase border border-white/20 px-4 py-2 rounded-full hover:bg-white/10 cursor-pointer"
            >
              Browse Data
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
