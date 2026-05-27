import Image from 'next/image';
import Link from 'next/link';

const researchProjects = [
  { years: '2008–2012', title: 'Regional Redlist of Birds, in Mongolia', partner: 'Dutch Government (NEMO-2), World Bank, Ministry of Nature, Environment and Tourism' },
  { years: '2009–2010', title: 'The status and distribution of Pallas\'s Fish Eagle in Mongolia', partner: 'The Peregrine Fund, WSC' },
  { years: '2009–2011', title: 'Avian influenza and bird migration in Mongolia', partner: 'OIE, Japan' },
  { years: '2008–2010', title: 'Taxonomy and bar-coding of birds', partner: 'Oslo University, Norway' },
  { years: '2008–2009', title: 'Migration studies of Geese in Mongolia', partner: 'Japanese Government' },
  { years: '2008–2009', title: 'A risk assessments of high power electric line in Mongolia', partner: 'Asia Research Centre, Korea Foundation for Advanced Studies' },
  { years: '2008–2009', title: 'High risk utility lines and globally threatened pole-nesting steppe raptors', partner: 'Oriental Bird Club, UK' },
  { years: '2007–2008', title: 'Taxonomy, biology and ecology of Upland Buzzard', partner: 'Asian Research Centre, Korea Foundation for Advanced Studies' },
  { years: '2007–2008', title: 'Mongolian wild ass conservation in south of Mongolia', partner: 'National Museum of Natural History of Paris, National Geographic Society' },
  { years: '2007–2008', title: 'Mitigating raptor electrocutions in Mongolia', partner: 'IBRC, Eilat; Lynette International Foundation; EDM International' },
  { years: '2005', title: 'Importance of North East Mongolia for Pacific Golden Plovers', partner: 'WIWO' },
  { years: '2004–2006', title: 'Satellite tracking of Black stork in Mongolia', partner: 'Ministry of Nature and Environment of Czech; Union of Czech and Slovak Zoological Gardens' },
  { years: '2004–2005', title: 'Wintering waterfowl census in Tuul River valley', partner: 'Khustai National Park, Mongolia' },
  { years: '2004', title: 'Important Bird Areas (IBA) Survey in Eastern Mongolia', partner: 'RSPB, WCS' },
  { years: '2003–2005', title: 'Relationships of the Raptors and Brandt\'s Vole', partner: 'GEF/UNDP' },
  { years: '2002', title: 'Taxonomy of Meadow Bunting in Mongolia', partner: 'Yamashina Institute for Ornithology, Japan' },
  { years: '2001', title: 'Satellite tracking of White-naped crane in Eastern Mongolia', partner: 'Yamashina Institute for Ornithology, Japan' },
  { years: '2000', title: 'Ecosystems of Bogdkhaan Mountain, Mongolia', partner: 'Mongolian Government' },
  { years: '2000–2001', title: 'Saxaul Sparrow in Mongolian Gobi', partner: 'Dr. Kate Oddie, Darwin Initiative, Zoological Society UK' },
  { years: '1999–2001', title: 'Globally Threatened White-naped crane: Habitat use and livestock grazing', partner: 'Institute of Avian Research, Germany; Birdlife International' },
  { years: '1998–2007', title: 'Saker falcon in Mongolia: Research and Conservation', partner: 'Environmental Research and Wildlife Development Agency, UAE' },
  { years: '1995', title: 'Mongolian-German Joint Biodiversity Research in Eastern Mongolia', partner: 'German researchers' },
  { years: '1994', title: 'Russian-Mongolian Joint Crane Conservation Project', partner: 'Daurian Strictly Protected Area, Russia' },
];

const aims = [
  'Conduct scientific research on birds and their habitats in global scale',
  'Organize training on conservation of birds and their habitats at national and international level',
  'Train young ornithologists with high competitiveness on bird and their habitats',
  'Consult and share information on bird and their habitats for public',
  'Create the national bird and their habitat database',
  'Help develop and promote the legislation of birds and their habitats conservation collaborating with governmental organizations',
  'Become the best managed organization with high standard competitiveness on research, conservation, education, database, awareness and consulting of birds and their habitats',
];

const values = [
  'Creative Thoughts',
  'High Responsibilities',
  'Scientific Freedom',
  'Tradition and Collective Actions',
  'New Products and Market Sensitivity',
  'Honest Competitiveness',
];

const activities = [
  { icon: 'travel_explore', title: 'International Research', desc: 'Conduct and propose international ornithological research projects in Mongolia' },
  { icon: 'campaign', title: 'Public Advocacy', desc: 'Statements, publications and appeals about rare and endangered bird species' },
  { icon: 'gavel', title: 'Conservation Control', desc: 'Co-control illegal hunting of rare and endangered bird species' },
  { icon: 'groups', title: 'Scientific Exchange', desc: 'Organize and participate in international conferences, trainings, and seminars' },
  { icon: 'stars', title: 'Member Recognition', desc: 'Award members who actively participate in the Society\'s activities' },
  { icon: 'flight', title: 'Field Expeditions', desc: 'Organize ornithological expeditions and bird watching tours' },
];

const partners = [
  'Mongolian Academy of Science',
  'Ministry of Nature, Environment and Tourism',
  'Mongolian Ornithological Foundation',
  'Mongolian State Agriculture University',
  'Khustai National Park',
  'Royal Society for Bird Protection – UK',
  'Oriental Bird Club – UK',
  'Halle-Wittenberg University – Germany',
  'Yamashina Institute for Ornithology – Japan',
  'Wilhelmshaven Avian Research Institute – Germany',
  'Czech Radio',
  'UNDP',
  'IBRC Eilat, Israel',
];

function YearBadge({ years }: { years: string }) {
  return (
    <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-bold bg-mos-tag-bg text-mos-tag-text tracking-wide whitespace-nowrap font-[Manrope,sans-serif]">
      {years}
    </span>
  );
}

export default function IntroductionPage() {
  return (
    <div className="bg-mos-surface">
      {/* ── Hero ── */}
      <section className="relative h-[520px] md:h-[600px] overflow-hidden flex items-end">
        <div className="absolute inset-0 z-0">
          <Image
            src="/test-landing/golden-eagle.jpg"
            alt="Golden Eagle"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001f6e]/70 via-[#001f6e]/20 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-8 pb-16 md:pb-24 w-full">
          <span className="text-[#ffdbcd] font-[Manrope,sans-serif] tracking-[0.25em] text-xs uppercase mb-4 block font-bold">
            Est. 1999 &bull; Ulaanbaatar
          </span>
          <h1 className="font-[Newsreader,serif] text-4xl md:text-6xl lg:text-7xl text-white mb-4 font-semibold leading-tight max-w-4xl drop-shadow-lg">
            Mongolian Ornithological Society
          </h1>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl font-[Manrope,sans-serif] drop-shadow leading-relaxed">
            Conserving Wild Birds for People
          </p>
        </div>
      </section>

      {/* ── Vision ── */}
      <section className="relative py-24 md:py-32 px-8 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-mos-periwinkle opacity-[0.07] rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-mos-accent font-[Manrope,sans-serif] tracking-widest text-xs uppercase font-bold mb-4 block">
              Our North Star
            </span>
            <h2 className="font-[Newsreader,serif] text-4xl md:text-5xl text-mos-navy font-semibold mb-8 leading-tight">
              Vision
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { number: '01', text: 'Support science-oriented initiatives and actions for birds' },
              { number: '02', text: 'Save birdlife and their habitats for the future' },
              { number: '03', text: 'Solve the conflicts between humans and birds' },
            ].map((item) => (
              <div
                key={item.number}
                className="group relative bg-white border border-mos-border/30 rounded-2xl p-8 md:p-10 shadow-sm hover:shadow-lg transition-all duration-500 hover:-translate-y-1"
              >
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-mos-navy opacity-[0.04] rounded-full blur-2xl group-hover:opacity-[0.08] transition-opacity" />
                <span className="font-[Newsreader,serif] text-6xl md:text-7xl text-mos-navy/10 font-bold block mb-6 leading-none select-none">
                  {item.number}
                </span>
                <p className="text-mos-text text-lg leading-relaxed font-[Manrope,sans-serif]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Aims ── */}
      <section className="py-24 md:py-28 px-8 bg-mos-section">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="text-mos-accent font-[Manrope,sans-serif] tracking-widest text-xs uppercase font-bold mb-4 block">
              What We Strive For
            </span>
            <h2 className="font-[Newsreader,serif] text-4xl md:text-5xl text-mos-navy font-semibold leading-tight">
              Aims
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-x-16 gap-y-6">
            {aims.map((aim, i) => (
              <div key={i} className="flex gap-5 group">
                <span className="font-[Newsreader,serif] text-mos-blue/30 text-2xl font-bold leading-none mt-0.5 select-none tabular-nums">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="text-mos-text text-base leading-relaxed font-[Manrope,sans-serif] pt-0.5">
                  {aim}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="py-24 md:py-28 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="text-mos-accent font-[Manrope,sans-serif] tracking-widest text-xs uppercase font-bold mb-4 block">
              Our Foundation
            </span>
            <h2 className="font-[Newsreader,serif] text-4xl md:text-5xl text-mos-navy font-semibold leading-tight">
              Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <div
                key={i}
                className="group relative bg-white border border-mos-border/30 rounded-xl p-8 hover:shadow-md transition-all duration-300"
              >
                <div className="absolute left-0 top-6 bottom-6 w-0.5 bg-mos-navy/10 group-hover:bg-mos-navy/30 transition-colors" />
                <div className="flex items-center gap-4 mb-4">
                  <span className="font-[Newsreader,serif] text-3xl text-mos-navy/15 font-bold select-none">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className="font-[Newsreader,serif] text-xl text-mos-navy font-semibold">
                  {value}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About ── */}
      <section className="py-24 md:py-28 px-8 bg-mos-section">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-5 gap-12 items-start">
            <div className="md:col-span-3 space-y-6">
              <span className="text-mos-accent font-[Manrope,sans-serif] tracking-widest text-xs uppercase font-bold mb-4 block">
                Our Story
              </span>
              <h2 className="font-[Newsreader,serif] text-4xl md:text-5xl text-mos-navy font-semibold leading-tight mb-8">
                About the Society
              </h2>
              <p className="text-mos-text text-base md:text-lg leading-relaxed font-[Manrope,sans-serif]">
                The Mongolian Ornithological Society was established in Ulaanbaatar city in 1999. Since then, the Society has been dedicated in working towards conserving and researching birds as well as educating the future generation of ornithologists in the country.
              </p>
              <p className="text-mos-text text-base md:text-lg leading-relaxed font-[Manrope,sans-serif]">
                In collaboration with the Ornithological Laboratory at the National University of Mongolia, a total of more than 30 scientific theses by bachelor, masters, and Ph.D. students were supervised by members of the Society.
              </p>
              <p className="text-mos-text text-base md:text-lg leading-relaxed font-[Manrope,sans-serif]">
                The Society also helps collect skin, feathers, and scientific data of birds for the Zoological museum at the University. The feather collection is one of the best collections in the country.
              </p>
            </div>
            <div className="md:col-span-2">
              <div className="bg-mos-navy rounded-2xl p-8 md:p-10 text-white relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/5 rounded-full blur-2xl" />
                <div className="relative z-10 space-y-8">
                  {[
                    { stat: '1999', label: 'Founded' },
                    { stat: '30+', label: 'Theses Supervised' },
                    { stat: '470+', label: 'Bird Species Documented' },
                  ].map((item) => (
                    <div key={item.label}>
                      <div className="font-[Newsreader,serif] text-4xl md:text-5xl font-bold text-white mb-1">
                        {item.stat}
                      </div>
                      <p className="text-white/70 text-sm font-[Manrope,sans-serif] tracking-wide">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Main Activities ── */}
      <section className="py-24 md:py-28 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="text-mos-accent font-[Manrope,sans-serif] tracking-widest text-xs uppercase font-bold mb-4 block">
              What We Do
            </span>
            <h2 className="font-[Newsreader,serif] text-4xl md:text-5xl text-mos-navy font-semibold leading-tight">
              Main Activities
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity, i) => (
              <div
                key={i}
                className="group relative bg-white border border-mos-border/30 rounded-2xl p-8 hover:shadow-md transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-mos-periwinkle/40 flex items-center justify-center mb-6 group-hover:bg-mos-periwinkle/70 transition-colors">
                  <span className="material-symbols-outlined text-mos-navy text-2xl">
                    {activity.icon}
                  </span>
                </div>
                <h3 className="font-[Newsreader,serif] text-xl text-mos-navy font-semibold mb-3">
                  {activity.title}
                </h3>
                <p className="text-mos-muted text-sm leading-relaxed font-[Manrope,sans-serif]">
                  {activity.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Collaboration Partners ── */}
      <section className="py-24 md:py-28 px-8 bg-mos-section">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="text-mos-accent font-[Manrope,sans-serif] tracking-widest text-xs uppercase font-bold mb-4 block">
              Global Network
            </span>
            <h2 className="font-[Newsreader,serif] text-4xl md:text-5xl text-mos-navy font-semibold leading-tight">
              Our Partners
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            {partners.map((partner) => (
              <span
                key={partner}
                className="px-5 py-3 bg-white border border-mos-border/30 rounded-xl text-sm text-mos-text font-[Manrope,sans-serif] hover:border-mos-navy/20 hover:shadow-sm transition-all cursor-default"
              >
                {partner}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Research Projects ── */}
      <section className="py-24 md:py-28 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-16">
            <span className="text-mos-accent font-[Manrope,sans-serif] tracking-widest text-xs uppercase font-bold mb-4 block">
              Field & Lab
            </span>
            <h2 className="font-[Newsreader,serif] text-4xl md:text-5xl text-mos-navy font-semibold leading-tight">
              Research Projects
            </h2>
            <p className="text-mos-muted text-lg font-[Manrope,sans-serif] mt-4 leading-relaxed">
              The following international research projects and field works were
              conducted by our members in collaboration with foreign research
              institutes and ornithologists.
            </p>
          </div>
          <div className="space-y-4">
            {researchProjects.map((project, i) => (
              <div
                key={i}
                className="group flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 p-5 rounded-xl border border-transparent hover:border-mos-border/30 hover:bg-white transition-all duration-200"
              >
                <div className="sm:w-28 flex-shrink-0">
                  <YearBadge years={project.years} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-[Newsreader,serif] text-base text-mos-text font-semibold leading-snug">
                    {project.title}
                  </h3>
                  {project.partner && (
                    <p className="text-mos-muted text-xs font-[Manrope,sans-serif] mt-1 line-clamp-1">
                      {project.partner}
                    </p>
                  )}
                </div>
                <span className="material-symbols-outlined text-mos-border group-hover:text-mos-navy/40 transition-colors text-lg hidden sm:block">
                  arrow_forward
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="relative py-32 px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/test-landing/saker-falcon.jpg"
            alt="Saker Falcon"
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-mos-navy/80 to-mos-navy/40" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="font-[Newsreader,serif] text-4xl md:text-5xl text-white font-semibold mb-6 leading-tight drop-shadow-lg">
            Join Our Mission
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-10 font-[Manrope,sans-serif] leading-relaxed">
            Become part of Mongolia&apos;s leading ornithological community.
            Your support fuels research, conservation, and education across the
            steppe.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="inline-block bg-white text-mos-navy px-10 py-4 rounded-full font-bold font-[Manrope,sans-serif] text-sm hover:bg-mos-periwinkle transition-all active:scale-95 shadow-lg"
            >
              Become a Member
            </Link>
            <Link
              href="#"
              className="inline-block bg-white/10 border border-white/30 text-white backdrop-blur-sm px-10 py-4 rounded-full font-bold font-[Manrope,sans-serif] text-sm hover:bg-white/20 transition-all active:scale-95"
            >
              Donate Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
