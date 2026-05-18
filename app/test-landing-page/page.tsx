"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function TestLandingPage() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const booksRef = useRef<HTMLDivElement>(null);
  const appImgError = true;
  const qrImgError = true;

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    const handleMouseEnter = () => { el.style.animationPlayState = "paused"; };
    const handleMouseLeave = () => { el.style.animationPlayState = "running"; };
    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);
    return () => {
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  const scrollBooks = (dir: "left" | "right") => {
    const el = booksRef.current;
    if (!el) return;
    el.scrollBy({ left: dir === "left" ? -300 : 300, behavior: "smooth" });
  };

  return (
    <div className="bg-[#faf8ff] font-[Manrope,sans-serif] text-[#1a1b21] selection:bg-[#cdd5ff] selection:text-[#535c7f]">
      <nav className="fixed top-0 w-full flex justify-between items-center px-12 py-8 max-w-full z-50 transition-all duration-300">
        <div className="text-2xl font-[Manrope,sans-serif] font-bold tracking-tight text-white drop-shadow-md">
          Mongolian Ornithological Society
        </div>
        <div className="hidden md:flex items-center space-x-10">
          <NavDropdown
            label="Introduction"
            active
            items={["Overview", "Message", "Members", "Education", "Research", "Events"]}
          />
          <NavDropdown
            label="Birds Mongolia"
            items={["Online Guide", "Ornis Mongolica", "Birdlist", "Rarity", "Ringing Center", "Publication", "Reports"]}
          />
          <NavDropdown
            label="Expeditions"
            items={["Gobi Desert", "Taiga Forest", "High Mountain", "Taiga to Gobi"]}
          />
          <Link href="#" className="text-white/90 hover:text-white text-sm font-semibold tracking-wide">Bird Forum</Link>
          <Link href="#" className="text-white/90 hover:text-white text-sm font-semibold tracking-wide">Blog News</Link>
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

      <main className="pt-0">
        {/* Hero */}
        <header
          className="relative h-[921px] w-full overflow-hidden flex flex-col justify-center items-center text-center px-6"
          style={{ clipPath: "ellipse(85% 100% at 50% 0%)" }}
        >
          <div className="absolute inset-0 z-0">
            <Image src="/test-landing/hero.jpg" alt="Majestic White-naped Crane standing in golden Mongolian marshland at sunrise" fill className="object-cover" priority sizes="100vw" />
            <div className="absolute inset-0 bg-black/10" />
          </div>
          <div className="relative z-10 max-w-4xl">
            <span className="text-white font-[Manrope,sans-serif] tracking-[0.2em] text-sm uppercase mb-4 block [text-shadow:0_2px_4px_rgba(0,0,0,0.5),0_1px_10px_rgba(0,0,0,0.3)]">
              Est. 1999 &bull; Ulaanbaatar
            </span>
            <h1 className="font-[Newsreader,serif] text-5xl md:text-7xl text-white mb-6 leading-tight font-medium [text-shadow:0_2px_4px_rgba(0,0,0,0.5),0_1px_10px_rgba(0,0,0,0.3)]">
              Give now and your gift goes twice as far
            </h1>
            <p className="text-xl text-white/95 max-w-2xl mx-auto mb-10 leading-relaxed [text-shadow:0_2px_4px_rgba(0,0,0,0.5),0_1px_10px_rgba(0,0,0,0.3)]">
              Your support helps us protect Mongolia&apos;s birds and their habitats.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-[#faf8ff] text-[#001f6e] px-10 py-4 rounded-full font-bold hover:bg-[#1a368d] hover:text-white transition-all active:scale-95 shadow-lg">
                DONATE NOW
              </button>
              <button className="bg-white/10 border border-white/40 text-white backdrop-blur-md px-10 py-4 rounded-full font-bold hover:bg-white/20 transition-all active:scale-95 shadow-lg">
                Learn More
              </button>
            </div>
          </div>
        </header>

        {/* Become a Member */}
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
                Become a steward of Mongolia&apos;s skies. Your membership fuels vital conservation efforts, grants you access to exclusive research reports, and connects you with a global community of bird enthusiasts and scientists.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pb-4">
                {[
                  { icon: "verified", label: "Supporting Field Conservation" },
                  { icon: "article", label: "Exclusive Scientific Reports" },
                  { icon: "groups", label: "Active Member Community" },
                  { icon: "event_available", label: "Priority Event Access" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-[#1a368d]">{item.icon}</span>
                    <span className="text-sm font-medium text-[#1a1b21]">{item.label}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-6 items-center">
                <button className="bg-[#001f6e] text-white px-10 py-4 rounded-full font-bold hover:bg-[#1a368d] transition-all shadow-lg active:scale-95">
                  Become a Member
                </button>
                <Link href="#" className="text-[#001f6e] font-bold flex items-center gap-2 group text-sm">
                  View Membership Tiers
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                </Link>
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

        {/* ONLINE GUIDE */}
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
              <h4 className="font-[Newsreader,serif] text-2xl mb-2 font-medium italic">Scientific Rigor</h4>
              <p className="text-sm opacity-90 leading-relaxed">Our data-driven approach has identified over 14 Important Bird Areas across the Mongolian steppe.</p>
            </div>
          </div>
          <div>
            <h2 className="font-[Newsreader,serif] text-4xl text-[#001f6e] mb-6 font-semibold">ONLINE GUIDE - Birds Mongolia</h2>
            <div className="space-y-6 text-[#444652] leading-relaxed">
              <p>Subscribe us on YOUTUBE: Our channel features the latest field recordings, educational content, and conservation success stories from across the Mongolian steppe.</p>
              <p>The Mongolian Ornithological Society provides the most comprehensive online resource for birders and researchers interested in the unique avian biodiversity of our region.</p>
              <div className="pt-4">
                <Link href="#" className="text-[#001f6e] font-bold flex items-center gap-2 group">
                  Our Conservation Strategy
                  <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Species of Significance */}
        <section className="bg-[#f4f2fb] py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex justify-between items-end mb-16">
              <div>
                <span className="text-[#4a1800] font-[Manrope,sans-serif] tracking-widest text-xs uppercase">Field Guide Highlights</span>
                <h2 className="font-[Newsreader,serif] text-4xl text-[#001f6e] mt-2 font-semibold">Recent News</h2>
              </div>
              <Link href="#" className="text-[#001f6e] font-medium border-b border-[#001f6e]/20 pb-1">View Full Directory</Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-6 h-auto md:h-[700px]">
              <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-xl">
                <Image src="/test-landing/saker-falcon.jpg" alt="Saker Falcon" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-8">
                  <span className="text-[#f58e5f] bg-[#ffdbcd] w-fit px-3 py-1 rounded-md text-xs font-bold mb-3">Vulnerable</span>
                  <h3 className="font-[Newsreader,serif] text-3xl text-white mb-2 font-medium">World Migratory Bird Day 2015</h3>
                  <p className="text-white/80 text-sm max-w-sm">Migratory birds are passengers without a visa across many countries. Therefore research and conservation activities for migratory birds should run by cooperative initiatives between countries.</p>
                </div>
              </div>
              <div className="md:col-span-2 relative group overflow-hidden rounded-xl">
                <Image src="/test-landing/sandgrouse.jpg" alt="Pallas's Sandgrouse" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
                  <h3 className="font-[Newsreader,serif] text-2xl text-white font-medium">World Migratory Bird Day 2015</h3>
                  <p className="text-white/70 text-xs">Join us in celebrating the incredible journeys of migratory birds and learning how we can protect their vital flyways.</p>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl">
                <Image src="/test-landing/golden-eagle.jpg" alt="Golden Eagle" fill className="object-cover group-hover:scale-105 transition-transform duration-700" sizes="(max-width: 768px) 100vw, 25vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex flex-col justify-end p-6">
                  <h3 className="font-[Newsreader,serif] text-xl text-white font-medium">Golden Eagle</h3>
                </div>
              </div>
              <div className="relative group overflow-hidden rounded-xl bg-[#1a368d] flex flex-col justify-center items-center p-6 text-center text-white">
                <div className="text-4xl font-[Newsreader,serif] font-bold mb-4">470+</div>
                <p className="text-sm font-[Manrope,sans-serif] opacity-80 mb-6">Confirmed species documented across the region</p>
                <button className="text-xs font-bold tracking-widest uppercase border border-white/20 px-4 py-2 rounded-full hover:bg-white/10">Browse Data</button>
              </div>
            </div>
          </div>
        </section>

        {/* Discover wild birds */}
        <section className="py-24 px-8 max-w-7xl mx-auto">
          <h2 className="font-[Newsreader,serif] text-4xl text-[#001f6e] text-center mb-16 font-semibold">Discover wild birds in Mongolia</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              { img: "/test-landing/taiga.jpg", alt: "Aerial drone shot of the Khuvsgul Taiga forest" },
              { img: "/test-landing/altai.jpg", alt: "Rugged mountain pass in the Altai range" },
              { img: "/test-landing/gobi.jpg", alt: "Sun-baked clay dunes of the Gobi desert" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-6">
                <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-lg">
                  <Image src={item.img} alt={item.alt} fill className="object-cover" sizes="(max-width: 768px) 100vw, 33vw" />
                </div>
                <h3 className="font-[Newsreader,serif] text-2xl text-[#001f6e] uppercase text-sm font-bold tracking-tight">BIRD WATCHING TOURS IN CHINGGIS KHAAN BIRTH PLACE</h3>
                <p className="text-[#444652] leading-relaxed text-sm">
                  {i === 0 && "This will be a very general bird watching and filming tours Eastern Mongolian forest, forest steppe, plain, steppe lakes and rivers, big river valleys namely Onon, Balj, Khurkh, and Ulz rivers and Chingis khaan birth place."}
                  {i === 1 && "Explore the majestic landscapes of Eastern Mongolia and witness the diverse birdlife that calls this historic region home."}
                  {i === 2 && "Professional guided tours through the heart of the Mongolian wilderness, specifically designed for ornithologists and nature photographers."}
                </p>
                <Link href="#" className="text-[#001f6e] font-bold text-xs tracking-wide hover:underline underline-offset-4">Learn More</Link>
              </div>
            ))}
          </div>
        </section>

        {/* Books and Publications */}
        <section className="py-24 bg-[#f4f2fb] overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
            <div>
              <span className="text-[#4a1800] font-[Manrope,sans-serif] tracking-widest text-xs uppercase font-bold mb-3 block">Member Resources</span>
              <h2 className="font-[Newsreader,serif] text-4xl text-[#001f6e] font-semibold">Our Books and Publications</h2>
            </div>
            <div className="flex gap-4">
              <button onClick={() => scrollBooks("left")} className="p-2 rounded-full border border-[#c5c5d4] hover:bg-[#e9e7ef] transition-colors text-[#001f6e]">
                <span className="material-symbols-outlined">chevron_left</span>
              </button>
              <button onClick={() => scrollBooks("right")} className="p-2 rounded-full border border-[#c5c5d4] hover:bg-[#e9e7ef] transition-colors text-[#001f6e]">
                <span className="material-symbols-outlined">chevron_right</span>
              </button>
            </div>
          </div>
          <div className="relative px-8 md:px-0">
            <div ref={booksRef} className="flex overflow-x-auto gap-8 no-scrollbar scroll-smooth px-8 md:px-[calc((100vw-80rem)/2)]">
              {[
                { img: "/test-landing/stitch/book1.jpg", title: "Birds of Mongolia: Field Guide", price: "$45.00" },
                { img: "/test-landing/stitch/book2.jpg", title: "Rare Raptors of Central Asia", price: "$62.00" },
                { img: "/test-landing/stitch/book3.jpg", title: "Steppe Songbirds", price: "$38.00" },
                { img: "/test-landing/stitch/book4.jpg", title: "Ornis Mongolica Vol. 12", price: "$25.00" },
              ].map((book, i) => (
                <div key={i} className="min-w-[280px] group flex-shrink-0">
                  <div className="relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-2 mb-4">
                    <div className="relative w-full h-[380px]">
                      <Image src={book.img} alt={book.title} fill className="object-cover" sizes="280px" />
                    </div>
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <h3 className="font-[Newsreader,serif] text-lg text-[#001f6e] font-semibold leading-tight mb-1">{book.title}</h3>
                  <p className="text-[#444652] font-bold text-sm">{book.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Download Bubo App */}
        <section className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center gap-16">
            <div className="flex-1 order-2 md:order-1">
              <div className="relative inline-block">
                <div className="absolute -inset-4 bg-[#001f6e]/5 blur-2xl rounded-full" />
                {!appImgError ? (
                  <Image
                    src="/test-landing/stitch/app-mockup.jpg"
                    alt="Bubo mobile app"
                    width={320} height={640}
                    className="relative z-10 w-full max-w-[320px] mx-auto drop-shadow-2xl"

                  />
                ) : (
                  <div className="relative z-10 w-[280px] h-[560px] mx-auto drop-shadow-2xl rounded-[2.5rem] border-8 border-[#1a1b21] bg-gradient-to-b from-[#001f6e] to-[#1a368d] flex items-center justify-center">
                    <span className="text-white text-6xl font-bold font-[Newsreader,serif]">Bubo</span>
                  </div>
                )}
              </div>
            </div>
            <div className="flex-1 order-1 md:order-2 space-y-8">
              <div>
                <span className="text-[#4a1800] font-[Manrope,sans-serif] tracking-widest text-xs uppercase font-bold mb-3 block">Digital Field Guide</span>
                <h2 className="font-[Newsreader,serif] text-4xl md:text-5xl text-[#001f6e] font-semibold mb-4">Download our mobile application</h2>
                <h3 className="font-[Manrope,sans-serif] text-3xl text-[#1a368d] font-bold tracking-tight mb-6">Bubo</h3>
              </div>
              <p className="text-[#444652] text-lg leading-relaxed">
                Identify birds in the field instantly. Bubo provides offline maps, professional bird calls, and real-time sighting reporting for every species in Mongolia.
              </p>
              <div className="flex flex-col sm:flex-row gap-8 items-center">
                <div className="p-4 bg-white border border-[#c5c5d4]/30 rounded-2xl shadow-sm">
                  {!qrImgError ? (
                    <Image
                      src="/test-landing/stitch/qr-code.png"
                      alt="QR Code to download Bubo App"
                      width={96} height={96}
                      className="w-24 h-24"

                    />
                  ) : (
                    <div className="w-24 h-24 bg-[#f4f2fb] rounded-xl flex items-center justify-center">
                      <span className="material-symbols-outlined text-4xl text-[#001f6e]">qr_code_scanner</span>
                    </div>
                  )}
                  <p className="text-[10px] text-center font-bold text-[#757683] uppercase tracking-tighter mt-2">Scan to Download</p>
                </div>
                <div className="flex flex-col gap-4">
                  <a href="https://play.google.com/store/apps/details?id=mn.gosmart.bubo" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105 active:scale-95">
                    <Image src="/test-landing/stitch/google-play.png" alt="Get it on Google Play" width={160} height={48} className="h-12" />
                  </a>
                  <a href="https://apps.apple.com/us/app/birds-of-mongolia/id1598051113" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-105 active:scale-95">
                    <Image src="/test-landing/stitch/app-store.png" alt="Download on the App Store" width={160} height={48} className="h-12" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Voices from the Forum */}
        <section className="py-24 bg-white overflow-hidden border-t border-[#c5c5d4]/10">
          <div className="max-w-7xl mx-auto px-8 mb-12">
            <span className="text-[#4a1800] font-[Manrope,sans-serif] tracking-widest text-xs uppercase block text-center mb-4 font-bold">Community Conversation</span>
            <h2 className="font-[Newsreader,serif] text-4xl text-[#001f6e] text-center font-semibold">Voices from the Forum</h2>
          </div>
          <div className="relative flex overflow-x-hidden">
            <div
              ref={scrollRef}
              className="flex gap-8 py-4"
              style={{ animation: "scroll 40s linear infinite" }}
            >
              {[...testimonials, ...testimonials].map((t, i) => (
                <div key={i} className="w-[350px] flex-shrink-0 bg-white border border-[#c5c5d4]/30 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center gap-4 mb-6">
                    <Image src={t.profileImg} alt={t.name} width={48} height={48} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="font-bold text-[#001f6e] text-sm">{t.name}</h4>
                      <p className="text-xs text-[#757683] font-[Manrope,sans-serif]">{t.role}</p>
                    </div>
                  </div>
                  <p className="text-[#444652] italic text-sm leading-relaxed">&ldquo;{t.quote}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-12 text-center">
            <Link href="#" className="text-[#001f6e] font-bold inline-flex items-center gap-2 group border-b-2 border-[#001f6e]/10 pb-1 hover:border-[#001f6e] transition-all">
              Visit the Community Forum
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">forum</span>
            </Link>
          </div>
        </section>

        {/* Support Our Research */}
        <section className="relative py-40 px-8 overflow-hidden text-white">
          <div className="absolute inset-0 z-0">
            <Image src="/test-landing/saker-falcon.jpg" alt="Saker Falcon in the wild" fill className="object-cover" sizes="100vw" />
            <div className="absolute inset-0 bg-black/40" />
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-20">
              <h2 className="font-[Newsreader,serif] text-4xl md:text-5xl mb-6 font-semibold [text-shadow:0_1px_3px_rgba(0,0,0,0.4)]">How you can support us</h2>
              <p className="max-w-2xl mx-auto opacity-90 text-lg [text-shadow:0_1px_3px_rgba(0,0,0,0.4)] leading-relaxed">
                Your contributions directly fund field equipment, ringing supplies, and local education programs in rural Mongolia.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
              {[
                { icon: "shopping_basket", title: "Shop now", desc: "Support a week of field data collection in remote IBAs." },
                { icon: "event", title: "Participate Events", desc: "Provide field guides to rural schools and community centers." },
                { icon: "explore", title: "Book Trips", desc: "Help upgrade our genetic testing and ringing facilities." },
                { icon: "favorite", title: "Donate Us", desc: "Join our society for exclusive reports and forum access." },
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-all border border-white/20">
                    <span className="material-symbols-outlined text-4xl">{item.icon}</span>
                  </div>
                  <h4 className="font-[Newsreader,serif] text-xl mb-2 font-medium [text-shadow:0_1px_3px_rgba(0,0,0,0.4)]">{item.title}</h4>
                  <p className="text-sm opacity-80 [text-shadow:0_1px_3px_rgba(0,0,0,0.4)] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="mt-20 text-center">
              <button className="bg-white text-[#001f6e] px-14 py-5 rounded-full font-bold hover:bg-[#dce1ff] transition-all shadow-2xl active:scale-95 text-sm tracking-wider uppercase">
                Donate Today
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white w-full pt-12 pb-8 px-8">
        <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8 max-w-7xl mx-auto mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="text-xl font-[Manrope,sans-serif] font-bold text-[#001f6e] mb-6">Mongolian Ornithological Society</div>
            <p className="text-[#444652] text-sm leading-relaxed mb-6">
              Copyright &copy; 2017 Mongolian Ornithological Society. Leading the discovery and protection of Mongolia&apos;s birdlife. A partner in global bird conservation efforts.
            </p>
            <div className="flex gap-4">
              <span className="material-symbols-outlined text-[#001f6e] cursor-pointer hover:opacity-70">public</span>
              <span className="material-symbols-outlined text-[#001f6e] cursor-pointer hover:opacity-70">public</span>
              <span className="material-symbols-outlined text-[#001f6e] cursor-pointer hover:opacity-70">mail</span>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-[Newsreader,serif] text-lg text-[#001f6e] font-semibold">Navigation</h5>
            <nav className="flex flex-col gap-2">
              {["Overview", "Conservation", "Ringing Center", "Publications"].map((item) => (
                <Link key={item} href="#" className="text-[#444652] hover:text-[#4a1800] transition-colors text-sm">{item}</Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-[Newsreader,serif] text-lg text-[#001f6e] font-semibold">Legal</h5>
            <nav className="flex flex-col gap-2">
              {["Contact Us", "Privacy Policy", "Terms of Use"].map((item) => (
                <Link key={item} href="#" className="text-[#444652] hover:text-[#4a1800] transition-colors text-sm">{item}</Link>
              ))}
            </nav>
          </div>
          <div className="flex flex-col gap-4">
            <h5 className="font-[Newsreader,serif] text-lg text-[#001f6e] font-semibold">Our Location</h5>
          </div>
        </div>
        <div className="max-w-7xl mx-auto border-t border-[#c5c5d4]/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#444652] text-sm">&copy; 2024 Mongolian Ornithological Society. Dedicated to the conservation of avian heritage.</p>
          <p className="text-[#757683] text-xs uppercase tracking-widest">Postal address: P.O.Box 537, Ulaanbaatar 210646A</p>
        </div>
      </footer>

      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Manrope:wght@200..800&display=swap");
        @import url("https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap");

        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-350px * 4 - 2rem * 4)); }
        }
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </div>
  );
}

const testimonials = [
  { name: "B. Altansukh", profileImg: "/test-landing/stitch/profile1.jpg", role: "Amateur Photographer", quote: "The online guide was instrumental during my trip to the Altai. Identified three new species thanks to the detailed field marks provided." },
  { name: "Dr. S. Batchuluun", profileImg: "/test-landing/stitch/profile2.jpg", role: "Ornithologist", quote: "The Ringing Center's data transparency is a benchmark for Central Asian research. Proud to contribute to this thriving scientific community." },
  { name: "Elena Petrova", profileImg: "/test-landing/stitch/profile3.jpg", role: "Wildlife Tourist", quote: "Joining the Eastern Mongolia tour changed my perspective on conservation. The guides' expertise is truly world-class." },
  { name: "Ganbold T.", profileImg: "/test-landing/stitch/profile4.jpg", role: "Forum Member", quote: "The discussion threads on rarity sightings are so active! It's great to see real-time data being shared across the country." },
];

function NavDropdown({ label, items, active }: { label: string; items: string[]; active?: boolean }) {
  return (
    <div className="group relative">
      <Link href="#" className={`text-sm font-semibold tracking-wide pb-1 ${active ? "text-white border-b-2 border-white" : "text-white/90 hover:text-white"}`}>
        {label}
      </Link>
      <div className="absolute left-0 mt-2 w-48 bg-white shadow-xl rounded-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
        {items.map((item) => (
          <Link key={item} href="#" className="block px-4 py-2 text-sm text-[#444652] hover:bg-[#f4f2fb]">{item}</Link>
        ))}
      </div>
    </div>
  );
}
