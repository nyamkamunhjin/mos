import Image from 'next/image';
import { getMembers, getStrapiMediaUrl } from '@/lib/strapi';
import type { StrapiMember } from '@/lib/types/member';

export const revalidate = 3600;

export default async function MembersPage() {
  let members: StrapiMember[] = [];
  try {
    members = await getMembers();
  } catch {
    // Strapi unavailable — render empty
  }

  const leadership = members.filter((m) => m.group === 'leadership').sort((a, b) => a.sortOrder - b.sortOrder);
  const boardMembers = members.filter((m) => m.group === 'board').sort((a, b) => a.sortOrder - b.sortOrder);
  const otherMembers = members.filter((m) => m.group === 'other').sort((a, b) => a.sortOrder - b.sortOrder);

  return (
    <div className="bg-mos-surface">
      {/* ── Hero ── */}
      <section className="relative h-[480px] md:h-[560px] overflow-hidden flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src="/test-landing/altai.jpg"
            alt="Mongolian landscape"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001f6e]/80 via-[#001f6e]/30 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 pb-16 md:pb-24 w-full">
          <span className="text-[#ffdbcd] font-[Manrope,sans-serif] tracking-[0.25em] text-xs uppercase mb-4 block font-bold">
            Since 1999 &bull; Our People
          </span>
          <h1 className="font-[Newsreader,serif] text-4xl md:text-6xl lg:text-7xl text-white mb-4 font-semibold leading-tight max-w-3xl drop-shadow-lg">
            Our Members
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl font-[Manrope,sans-serif] drop-shadow leading-relaxed">
            Meet the dedicated ornithologists, researchers, and conservationists
            behind the Mongolian Ornithological Society.
          </p>
        </div>
      </section>

      {/* ── Leadership ── */}
      <section className="py-24 md:py-28 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="text-mos-accent font-[Manrope,sans-serif] tracking-widest text-xs uppercase font-bold mb-4 block">
              Mentors &amp; Founders
            </span>
            <h2 className="font-[Newsreader,serif] text-4xl md:text-5xl text-mos-navy font-semibold leading-tight">
              Leadership
            </h2>
          </div>
          <div className="space-y-20">
            {leadership.map((member, i) => (
              <div
                key={i}
                className="grid md:grid-cols-5 gap-8 md:gap-12 items-start"
              >
                <div className="md:col-span-2">
                  <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-lg">
                    {member.image ? (
                      <Image
                        src={getStrapiMediaUrl(member.image)!}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 40vw"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-mos-periwinkle/20">
                        <span className="font-[Newsreader,serif] text-7xl text-mos-navy/10 font-bold select-none">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </div>
                <div className="md:col-span-3 md:pt-8">
                  <span className="font-[Manrope,sans-serif] text-[11px] font-bold text-mos-accent tracking-[0.2em] uppercase">
                    {member.role}
                  </span>
                  <h3 className="font-[Newsreader,serif] text-3xl md:text-4xl text-mos-navy font-semibold mt-2 mb-1 leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-mos-muted text-sm font-[Manrope,sans-serif] font-medium uppercase tracking-wider mb-6">
                    {member.title}
                  </p>
                  <div className="w-12 h-0.5 bg-mos-navy/20 mb-6" />
                  <p className="text-mos-text text-base md:text-lg leading-relaxed font-[Manrope,sans-serif]">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Board Members ── */}
      <section className="py-24 md:py-28 px-8 bg-mos-section">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="text-mos-accent font-[Manrope,sans-serif] tracking-widest text-xs uppercase font-bold mb-4 block">
              Executive Team
            </span>
            <h2 className="font-[Newsreader,serif] text-4xl md:text-5xl text-mos-navy font-semibold leading-tight">
              Board Members
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {boardMembers.map((member, i) => (
              <div
                key={i}
                className="group bg-white border border-mos-border/30 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-500"
              >
                <div className="aspect-[4/5] relative overflow-hidden bg-mos-periwinkle/20">
                  {member.image ? (
                    <Image
                      src={getStrapiMediaUrl(member.image)!}
                      alt={member.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-[Newsreader,serif] text-7xl text-mos-navy/10 font-bold select-none">
                        {member.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-[Newsreader,serif] text-xl text-mos-navy font-semibold leading-tight">
                    {member.name}
                  </h3>
                  <p className="text-mos-accent text-xs font-[Manrope,sans-serif] font-bold mt-1.5 tracking-wider uppercase">
                    {member.title}
                  </p>
                  <div className="w-8 h-px bg-mos-border mt-4 mb-4" />
                  <p className="text-mos-text text-sm leading-relaxed font-[Manrope,sans-serif]">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Members & Researchers ── */}
      <section className="py-24 md:py-28 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="text-mos-accent font-[Manrope,sans-serif] tracking-widest text-xs uppercase font-bold mb-4 block">
              Our Community
            </span>
            <h2 className="font-[Newsreader,serif] text-4xl md:text-5xl text-mos-navy font-semibold leading-tight">
              Members &amp; Researchers
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {otherMembers.map((member, i) => (
              <div
                key={i}
                className="group"
              >
                <div className="flex items-start gap-5 mb-5">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden bg-mos-periwinkle/30 flex-shrink-0 ring-2 ring-mos-periwinkle/40 group-hover:ring-mos-navy/15 transition-all">
                    {member.image ? (
                      <Image
                        src={getStrapiMediaUrl(member.image, 'thumbnail')!}
                        alt={member.name}
                        fill
                        className="object-cover"
                        sizes="64px"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="font-[Newsreader,serif] text-xl text-mos-navy/20 font-bold">
                          {member.name.charAt(0)}
                        </span>
                      </div>
                    )}
                  </div>
                  <div className="min-w-0 pt-1">
                    <h3 className="font-[Newsreader,serif] text-lg text-mos-navy font-semibold leading-snug">
                      {member.name}
                    </h3>
                    {member.title && (
                      <p className="text-mos-accent text-[11px] font-[Manrope,sans-serif] font-bold mt-1 tracking-wider uppercase">
                        {member.title}
                      </p>
                    )}
                  </div>
                </div>
                <p className="text-mos-text text-sm leading-relaxed font-[Manrope,sans-serif]">
                  {member.bio}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
