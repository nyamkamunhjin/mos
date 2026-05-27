import Image from 'next/image';
import Link from 'next/link';

export function OnlineGuide() {
  return (
    <section className="py-24 px-8 max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
      <div className="relative">
        <div className="absolute -top-12 -left-12 w-64 h-64 bg-[#dce1ff] opacity-20 rounded-full blur-3xl" />
        <div className="relative z-10 w-full h-[500px] rounded-xl overflow-hidden shadow-2xl">
          <Image
            src="/test-landing/researcher.jpg"
            alt="Scientific researcher in the Gobi Desert using binoculars"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        <div className="absolute -bottom-6 -right-6 bg-[#1a368d] p-8 rounded-xl shadow-xl z-20 max-w-xs text-white">
          <h4 className="font-[Newsreader,serif] text-2xl mb-2 font-medium italic">
            Scientific Rigor
          </h4>
          <p className="text-sm opacity-90 leading-relaxed">
            Our data-driven approach has identified over 14 Important Bird Areas
            across the Mongolian steppe.
          </p>
        </div>
      </div>
      <div>
        <h2 className="font-[Newsreader,serif] text-4xl text-[#001f6e] mb-6 font-semibold">
          ONLINE GUIDE - Birds Mongolia
        </h2>
        <div className="space-y-6 text-[#444652] leading-relaxed">
          <p>
            Subscribe us on YOUTUBE: Our channel features the latest field
            recordings, educational content, and conservation success stories
            from across the Mongolian steppe.
          </p>
          <p>
            The Mongolian Ornithological Society provides the most comprehensive
            online resource for birders and researchers interested in the unique
            avian biodiversity of our region.
          </p>
          <div className="pt-4">
            <Link
              href="#"
              className="text-[#001f6e] font-bold flex items-center gap-2 group"
            >
              Our Conservation Strategy
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
