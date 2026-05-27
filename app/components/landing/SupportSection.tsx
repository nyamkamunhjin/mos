import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function SupportSection() {
  return (
    <section className="relative py-24 md:py-40 px-8 overflow-hidden text-white">
      <div className="absolute inset-0 z-0">
        <Image
          src="/test-landing/saker-falcon.jpg"
          alt="Saker Falcon in the wild"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <h2 className="font-[Newsreader,serif] text-4xl md:text-5xl mb-6 font-semibold [text-shadow:0_1px_3px_rgba(0,0,0,0.4)]">
            How you can support us
          </h2>
          <p className="max-w-2xl mx-auto opacity-90 text-lg [text-shadow:0_1px_3px_rgba(0,0,0,0.4)] leading-relaxed">
            Your contributions directly fund field equipment, ringing supplies,
            and local education programs in rural Mongolia.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          {[
            {
              icon: 'shopping_basket',
              title: 'Shop now',
              desc: 'Support a week of field data collection in remote IBAs.',
            },
            {
              icon: 'event',
              title: 'Participate Events',
              desc: 'Provide field guides to rural schools and community centers.',
            },
            {
              icon: 'explore',
              title: 'Book Trips',
              desc: 'Help upgrade our genetic testing and ringing facilities.',
            },
            {
              icon: 'favorite',
              title: 'Donate Us',
              desc: 'Join our society for exclusive reports and forum access.',
            },
          ].map((item, i) => (
            <Link
              key={i}
              href="/donate"
              className="text-center group cursor-pointer"
            >
              <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all border border-white/20">
                <span className="material-symbols-outlined text-4xl">
                  {item.icon}
                </span>
              </div>
              <h4 className="font-[Newsreader,serif] text-xl mb-2 font-medium [text-shadow:0_1px_3px_rgba(0,0,0,0.4)]">
                {item.title}
              </h4>
              <p className="text-sm opacity-80 [text-shadow:0_1px_3px_rgba(0,0,0,0.4)] leading-relaxed">
                {item.desc}
              </p>
            </Link>
          ))}
        </div>
        <div className="mt-20 text-center">
          <Button href="/donate" variant="default" size="pill" className="bg-white text-[#001f6e] hover:bg-[#dce1ff] shadow-2xl tracking-wider uppercase">
            Donate Today
          </Button>
        </div>
      </div>
    </section>
  );
}
