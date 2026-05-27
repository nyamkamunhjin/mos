import Image from 'next/image';
import { Button } from '@/components/ui/button';
export function MemberSection() {
  return (
    <section className="py-24 px-8 bg-white border-b border-[#c5c5d4]/20 overflow-hidden relative">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-[#001f6e] opacity-[0.03] rounded-full blur-3xl" />
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
        <div className="flex-1 space-y-8">
          <div>
            <span className="text-[#001f6e] font-[Manrope,sans-serif] tracking-widest text-xs uppercase font-bold mb-3 block">
              Collective Impact
            </span>
            <h2 className="font-[Newsreader,serif] text-4xl md:text-5xl text-[#001f6e] font-semibold leading-tight">
              Join the Mongolian Ornithological Society
            </h2>
          </div>
          <p className="text-[#444652] text-lg leading-relaxed max-w-xl">
            Become a steward of Mongolia&apos;s skies. Your membership fuels vital
            conservation efforts, grants you access to exclusive research reports,
            and connects you with a global community of bird enthusiasts and
            scientists.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-4">
            {[
              { icon: 'verified', label: 'Supporting Field Conservation' },
              { icon: 'article', label: 'Exclusive Scientific Reports' },
              { icon: 'groups', label: 'Active Member Community' },
              { icon: 'event_available', label: 'Priority Event Access' },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <span className="material-symbols-outlined text-[#1a368d]">
                  {item.icon}
                </span>
                <span className="text-sm font-medium text-[#1a1b21]">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-6 items-center">
            <Button href="#" variant="default" size="pill" className="shadow-lg">
              Become a Member
            </Button>
            <Button href="/introduction/overview" variant="link" className="text-sm gap-2 group">
              View Membership Tiers
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_right_alt
              </span>
            </Button>
          </div>
        </div>
        <div className="flex-1 w-full md:w-auto">
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
          </div>
        </div>
      </div>
    </section>
  );
}
