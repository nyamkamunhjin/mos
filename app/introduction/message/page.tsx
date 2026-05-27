import Image from 'next/image';

export default function MessagePage() {
    return (
        <div className="bg-mos-surface">
            {/* ── Hero ── */}
            <section className="relative h-[400px] md:h-[480px] overflow-hidden flex items-end">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/test-landing/researcher.jpg"
                        alt="Mongolian landscape"
                        fill
                        className="object-cover"
                        priority
                        sizes="100vw"
                        quality={85}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001f6e]/85 via-[#001f6e]/30 to-transparent" />
                </div>
                <div className="relative z-10 max-w-7xl mx-auto px-8 pb-14 md:pb-20 w-full">
                    <span className="text-[#ffdbcd] font-[Manrope,sans-serif] tracking-[0.25em] text-xs uppercase mb-3 block font-bold">
                        Letter from the Director
                    </span>
                    <h1 className="font-[Newsreader,serif] text-4xl md:text-6xl lg:text-7xl text-white font-semibold leading-tight max-w-3xl drop-shadow-lg">
                        Message from the Director
                    </h1>
                </div>
            </section>

            {/* ── Letter ── */}
            <section className="py-20 md:py-28 px-8 relative overflow-hidden">
                <div className="absolute top-32 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-mos-periwinkle opacity-[0.05] rounded-full blur-3xl pointer-events-none" />

                <div className="max-w-4xl mx-auto relative z-10">
                    {/* ── Director portrait + opening ── */}
                    <div className="flex flex-col md:flex-row gap-10 md:gap-14 mb-16 md:mb-20">
                        {/* Photo */}
                        <div className="w-full md:w-80 lg:w-96 flex-shrink-0 md:sticky md:top-32">
                            <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden shadow-lg border">
                                <Image
                                    src="/Gombobaatar.JPG"
                                    alt="Dr. Gombobaatar Sundev"
                                    fill
                                    className="object-cover"
                                    priority
                                    quality={85}
                                    sizes="(max-width: 768px) 100vw, 384px"
                                />
                            </div>
                            <div className="mt-5 text-center md:text-left">
                                <h2 className="font-[Newsreader,serif] text-2xl text-mos-navy font-semibold leading-tight">
                                    Dr. Gombobaatar Sundev
                                </h2>
                                <p className="text-mos-muted text-xs font-[Manrope,sans-serif] mt-1 tracking-wide uppercase">
                                    Director
                                </p>
                            </div>
                        </div>

                        {/* Letter opening */}
                        <div className="flex-1">
                            <p className="font-[Newsreader,serif] text-mos-muted text-lg mb-8 italic">
                                Dear Sir/Madam,
                            </p>

                            <div className="font-[Newsreader,serif] text-[17px] md:text-[20px] text-mos-text leading-[1.75] space-y-6 tracking-[0.01em]">
                                <p>
                                    We greatly appreciate your visit to our
                                    website. Hope you enjoy our site as you get
                                    knowledge and information about our team and
                                    birds in Mongolia. Bird is one of the most
                                    interesting and beautiful creatures of our
                                    world. That&apos;s why most people like and
                                    love birds, including our team, many
                                    scientists, readers, and you.
                                </p>
                                <p>
                                    Since the time Mongolian Ornithological
                                    Society (MOS) was established in Mongolia as
                                    a NGO that is dedicated to birds and their
                                    habitats&apos; research and conservation,
                                    the organization has been extensively
                                    running various activities including
                                    research projects, conservation of
                                    birds&apos; habitats, education, publication
                                    and birding tours in Mongolia.
                                </p>
                                <p>
                                    All these activities are integrated under
                                    our mission:{' '}
                                    <em className="text-mos-navy not-italic font-semibold">
                                        Support science-oriented initiatives and
                                        actions for birds; save birdlife and
                                        their habitats for the future; solve the
                                        conflicts between humans and birdlife.
                                    </em>
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* ── Decorative rule ── */}
                    <div className="flex items-center gap-4 max-w-sm mx-auto mb-16 md:mb-20">
                        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-mos-border/50 to-transparent" />
                        <span className="text-mos-navy/20 font-[Newsreader,serif] text-sm select-none">
                            &#10087;
                        </span>
                        <span className="h-px flex-1 bg-gradient-to-r from-transparent via-mos-border/50 to-transparent" />
                    </div>

                    {/* ── Rest of the letter ── */}
                    <div className="max-w-2xl mx-auto font-[Newsreader,serif] text-[17px] md:text-[20px] text-mos-text leading-[1.75] space-y-6 tracking-[0.01em]">
                        <p>
                            Our nearest aim is to establish the National Bird
                            Data Base covering all species, photographs,
                            information and data on field identification,
                            taxonomy, number, status, distribution, breeding
                            ecology, behavior, threats and conservation. We hope
                            you will contribute your idea and share your
                            experiences.
                        </p>

                        <p>
                            The Society has been closely collaborating with
                            Ornithological Laboratory at the National University
                            of Mongolia on educating undergraduate and
                            postgraduate students in order to train
                            well-educated ornithologists&apos; generations and
                            bird conservationists in the country. Your
                            collaborations, encouragements and supports through
                            becoming a member, participating in professional
                            birding trip, and donating books, field equipment,
                            and others for these activities are most welcomed.
                        </p>

                        <p className="italic text-lg text-mos-blue">
                            We wish you the strongest health, happiness, success
                            and future collaborations.
                        </p>

                        {/* ── Closing ── */}
                        <div className="pt-12 md:pt-16 mt-12 border-t border-mos-border/20">
                            <div className="font-[Newsreader,serif]">
                                <p className="text-lg text-mos-muted italic mb-1">
                                    Yours sincerely,
                                </p>
                                <div className="mt-6 font-[Newsreader,serif]">
                                    <p
                                        className="text-2xl text-mos-navy font-semibold"
                                        style={{ fontStyle: 'normal' }}
                                    >
                                        Dr. Gombobaatar Sundev
                                    </p>
                                    <p className="text-sm text-mos-muted mt-1 font-[Manrope,sans-serif] tracking-wide">
                                        Director of the Mongolian Ornithological
                                        Society
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
