import Image from 'next/image';
import Link from 'next/link';

type Crumb = { label: string; href?: string };

const heights = {
    sm: 'h-[300px] md:h-[360px]',
    md: 'h-[400px] md:h-[480px]',
    lg: 'h-[520px] md:h-[600px]',
};

export function PageHero({
    eyebrow,
    title,
    subtitle,
    breadcrumbs,
    image,
    imageAlt = '',
    height = 'md',
}: {
    eyebrow?: string;
    title: string;
    subtitle?: string;
    breadcrumbs?: Crumb[];
    image?: string;
    imageAlt?: string;
    height?: keyof typeof heights;
}) {
    return (
        <section className={`relative ${heights[height]} overflow-hidden flex items-end ${image ? '' : 'bg-mos-navy'}`}>
            {image ? (
                <div className="absolute inset-0 z-0">
                    <Image src={image} alt={imageAlt} fill className="object-cover" priority sizes="100vw" quality={85} />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001f6e]/85 via-[#001f6e]/35 to-transparent" />
                </div>
            ) : (
                <>
                    <div className="absolute top-[-120px] right-[-80px] w-[520px] h-[520px] bg-mos-periwinkle opacity-[0.08] rounded-full blur-3xl pointer-events-none" />
                    <div className="absolute bottom-[-160px] left-[-100px] w-[480px] h-[480px] bg-mos-blue opacity-[0.10] rounded-full blur-3xl pointer-events-none" />
                </>
            )}
            <div className="relative z-10 max-w-7xl mx-auto px-8 pb-14 md:pb-20 w-full">
                {breadcrumbs && breadcrumbs.length > 0 && (
                    <nav className="flex flex-wrap items-center gap-2 text-xs font-[Manrope,sans-serif] tracking-widest uppercase mb-4 text-white/60">
                        {breadcrumbs.map((c, i) => (
                            <span key={c.label} className="flex items-center gap-2">
                                {i > 0 && <span className="text-white/30">/</span>}
                                {c.href ? (
                                    <Link href={c.href} className="hover:text-white transition-colors">
                                        {c.label}
                                    </Link>
                                ) : (
                                    <span>{c.label}</span>
                                )}
                            </span>
                        ))}
                    </nav>
                )}
                {eyebrow && (
                    <span className="text-[#ffdbcd] font-[Manrope,sans-serif] tracking-[0.25em] text-xs uppercase mb-3 block font-bold">
                        {eyebrow}
                    </span>
                )}
                <h1 className="font-[Newsreader,serif] text-4xl md:text-6xl text-white font-semibold leading-tight max-w-4xl drop-shadow-lg">
                    {title}
                </h1>
                {subtitle && (
                    <p className="text-white/85 text-lg md:text-xl max-w-2xl font-[Manrope,sans-serif] drop-shadow leading-relaxed mt-5">
                        {subtitle}
                    </p>
                )}
            </div>
        </section>
    );
}
