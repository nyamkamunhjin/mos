import Image from 'next/image';

const members = [
  {
    name: "Prof. D. Sumiya",
    title: "Honorary Member",
    imageUrl: "/members/Sumiya.jpg",
    role: 'Founding Member',
    bio: "Prof. D. Sumiya has more than 20 years' experience in studying birds of Khuvsgul Lake with Russian colleagues. His most famous monograph is \"Birds of Kuvsgul Lake and its surrounding territories\". He is one of the founders of the Ornithological Laboratory at NUM and has worked at the University more than 30 years. The main topic of his bird research is ecology of Gulls and rare bird conservation in Mongolia. In recent years, he is working on breeding biology and conservation of steppe raptors with Gomboo. He is a famous lecturer of Ornithology in Mongolia and has been training new generation of Mongolian ornithologists for 40 years.",
  },
  {
    name: "Dr. S. Gombobaatar",
    title: "Founder & Director",
    imageUrl: "/Gombobaatar.JPG",
    role: 'Founder',
    bio: "One of the founders of the Society in 1999. Since then, he has been extensively dealing with activities on bird research, conservation, and international collaborations for the Society. He is also head of the Laboratory of Ornithology at the National University of Mongolia. Gomboo wrote his master thesis on Cranes of Mongolia in 1996 and Ph.D. thesis on Saker Falcon in Mongolia in 2006. He has been supervising and coordinating all projects and research works of the Society, and supervising theses of B.Sc., MSc., Ph.D students at his Laboratory.",
  },
  {
    name: "Ch. Uuganbayar MSc.",
    title: "Board Member",
    imageUrl: "/members/Uuganbayar_Last.jpg",
    role: 'Board Member',
    bio: "One of the pioneer members of the society. His bachelor and master thesis were written on the diet composition of Sakers in Central Mongolia. Since 2002, Uugan has been working at the Biology Department of Mongolian State University of Agriculture. He successfully organized several birding and ornithological expeditions in Eastern Mongolia.",
  },
  {
    name: "D. Usukhjargal MSc.",
    title: "Board Member",
    imageUrl: "/members/Usukhuu.jpg",
    role: 'Board Member',
    bio: "He has been working at Hustai Nuruu National Park as a Takhi biologist since 2003. He is one of the experts on birds in the areas. He completed his master thesis on Reed Deer in Hustai Nuruu National Park. Now he is studying doctorate training at the National University of Mongolia.",
  },
  {
    name: "P. Amartuvshin MSc.",
    title: "Board Member",
    imageUrl: "/placeholder.svg",
    role: 'Board Member',
    bio: "He is one of the researchers of the Society. Amaraa wrote his master thesis on Impacts of power lines on bird mortality in 2010. He has participated in research projects on Regional Red List of Birds, risk assessments of high power electric lines, and Important Bird Areas surveys. He has been guiding the Society's birding tours since 2009.",
  },
  {
    name: "B. Odkhuu MSc.",
    title: "Ornithologist",
    imageUrl: "/placeholder.svg",
    role: 'Researcher',
    bio: "Ornithologist at Chinggis Khaan International Airport, working to reduce bird and aircraft strike hazards since 2008. He wrote his bachelor thesis on Saker falcon's sex and age identification and master thesis on biological surveys of upland buzzard. He is interested in studying urban birds and raptors.",
  },
  {
    name: "B. Gantulga Dr.",
    title: "Researcher",
    imageUrl: "/placeholder.svg",
    role: 'Researcher',
    bio: "Received his bachelor and master degree from the National University of Mongolia. His master thesis was on breeding success of Azure-winged magpie. He has been a member of the Mongolian Ornithological Society since 2005 and is well experienced in field study and birding.",
  },
  {
    name: "O. Soronzonbold MSc.",
    title: "Young Member",
    imageUrl: "/placeholder.svg",
    role: 'Researcher',
    bio: "One of the young members of the society. He participates in Pallas's fish eagle and Saker surveys, helps organise conferences and workshops. He's interested in studying conservation genetics and biology of birds and wildlife in Mongolia.",
  },
  {
    name: "B. Yumjirmaa",
    title: "Member",
    imageUrl: "/members/yuki.jpg",
    role: 'Researcher',
    bio: "Graduated from the National University of Mongolia majoring in Ecology and Nature Conservation. She has been a member of the Society since 2009 and has actively participated in conferences, workshops and birding trips.",
  },
  {
    name: "U. Tuvshin",
    title: "Researcher",
    imageUrl: "/members/tuvshin.jpg",
    role: 'Researcher',
    bio: "Graduated from Eco-Asia Institute's Ecology & Conservation class. His research work includes observation of birds in the Avian Influenza Mongolia Project, Great Bustard's migration, and water birds migration studies.",
  },
  {
    name: "E. Unurjargal",
    title: "Young Member",
    imageUrl: "/placeholder.svg",
    role: 'Researcher',
    bio: "One of the young members of the society. She graduated from the National University of Mongolia's Ecotourism Management class. She participates in bird watching tours and helps organize conferences and workshops.",
  },
];

const leadership = members.slice(0, 2);
const boardMembers = members.slice(2, 5);
const otherMembers = members.slice(5);

export default function MembersPage() {
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
                    <Image
                      src={member.imageUrl}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
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
                  {member.imageUrl !== '/placeholder.svg' ? (
                    <Image
                      src={member.imageUrl}
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
                    {member.imageUrl !== '/placeholder.svg' ? (
                      <Image
                        src={member.imageUrl}
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
